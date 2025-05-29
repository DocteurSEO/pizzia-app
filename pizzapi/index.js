const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome on PizzAi API!')
})

app.use('/pizzas', require('./routes/pizzaRoutes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

