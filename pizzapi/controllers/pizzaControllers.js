const db = require('../config/firebase').db;

const pizzasRef = db.collection('pizzas');

const getPizzas = (req, res) => {
  pizzasRef.get()
    .then(snapshot => {
      if (snapshot.empty) {
        return res.status(404).json({ message: 'No pizzas found' });
      }

      const pizzas = [];
      snapshot.forEach(doc => {
        pizzas.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return res.status(200).json(pizzas);
    })
    .catch(error => {
      return res.status(500).json({ message: {
        error: 'Error retrieving pizzas',
        details: error.message
      }});
    });
}


module.exports = { getPizzas }