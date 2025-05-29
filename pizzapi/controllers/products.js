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


module.exports = { getProducts }