const { getProductById } = require('./products');

const db = require('../config/firebase').db;

const orders = db.collection('orders');

const getOrders = (req, res) => {
  orders.get()
    .then(snapshot => {
      if (snapshot.empty) {
        return res.status(404).json({ message: 'No orders found' });
      }

      const ordersList = [];
      snapshot.forEach(doc => {
        ordersList.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return res.status(200).json(ordersList);
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error retrieving orders',
          details: error.message
        }
      });
    });
}

const getOrderById = (req, res) => {
  const orderID = req.params.id;

  orders.doc(orderID).get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ message: 'Order not found' });
      }

      return res.status(200).json({ id: doc.id, ...doc.data() });
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error retrieving order',
          details: error.message
        }
      });
    });
}

// to clean up the code, we can use async/await for better readability
const createOrder = async (req, res) => {
  try {
    const orders = db.collection('orders');
    const newOrder = req.body;
    newOrder.dateOrder = new Date().toISOString();
    const userSnap = await db.collection('users').doc(req.body.userID).get();
    const userData = { id: userSnap.id, ...userSnap.data() };
    const pizzaSnapshots = await Promise.all(
      req.body.pizzaIDs.map(id => db.collection('pizzas').doc(id).get())
    );
    const pizzaData = pizzaSnapshots.map(doc => ({ id: doc.id, ...doc.data() }));
    newOrder.userID = userData;
    newOrder.pizzaIDs = pizzaData;
    const docRef = await orders.add(newOrder);
    return res.status(201).json({ id: docRef.id, ...newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({
      message: {
        error: 'Error creating order',
        details: error.message
      }
    });
  }
};

// clean
const updateOrder = (req, res) => {
  const orderID = req.params.id;
  const updatedData = req.body;

  if (!updatedData.pizzaID) {
    return res.status(400).json({ message: 'Please, select a pizza' });
  }

  orders.doc(orderID).update(updatedData)
    .then(() => {
      return res.status(200).json({ id: orderID, ...updatedData });
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error updating order',
          details: error.message
        }
      });
    });
}

const deleteOrder = (req, res) => {
  const orderID = req.params.id;
  orders.doc(orderID).delete()
    .then(() => {
      return res.status(200).json("Order deleted");
    })
    .catch(error => {
      return res.status(500).json({
        message: {
          error: 'Error deleting order',
          details: error.message
        }
      });
    });
}

module.exports = { getOrders, getOrderById, createOrder, updateOrder, deleteOrder };