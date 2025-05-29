const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome on PizzAi API!')
})

//routers
app.use('/products', require('./routers/products'));

app.listen(port, () => {
  console.log(`Pizzapi app listening on port ${port}`);
})

