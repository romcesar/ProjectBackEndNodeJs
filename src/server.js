const express = require('express');

const sequelize = require('./config/database');
const Rotas = require('./routes/Rotas');
const RotasUser = require('./routes/RotasUser');
const RotasCategory = require('./routes/RotasCategory');
const RotasProduct = require('./routes/RotasProduct');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/v1/users', Rotas);
app.use('/v1/user', RotasUser);
app.use('/v1/category', RotasCategory);
app.use('/v1/product', RotasProduct);



sequelize.sync().then(() => {

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});