const db = require('../config/firebase').db;

const products = db.collection('pizzas');

const getProducts = (req, res) => {
  products.get()
    .then(snapshot => {
      if (snapshot.empty) {
        return res.status(404).json({ message: 'No products found' });
      }

      const products = [];
      snapshot.forEach(doc => {
        products.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return res.status(200).json(products);
    })
    .catch(error => {
      return res.status(500).json({ message: {
        error: 'Error retrieving products',
        details: error.message
      }});
    });
}

const createProduct = (req, res) => {
  const newProduct = req.body;

  if (!newProduct.name || !newProduct.price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  if (typeof newProduct.price !== 'number') {
    return res.status(400).json({ message: 'Price must be a number' });
  }

  if (!newProduct.desc) {
    newProduct.desc = newProduct.name;
  }

  products.add(newProduct)
    .then(doc => {
      return res.status(201).json({ id: doc.id, ...newProduct });
    })
    .catch(error => {
      return res.status(500).json({ message: {
        error: 'Error creating product',
        details: error.message
      }});
    });
}


module.exports = { getProducts, createProduct };