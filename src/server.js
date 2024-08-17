const express = require('express');

const sequelize = require('./config/database');
const Rotas = require('./routes/Rotas');
const RotasUser = require('./routes/RotasUser');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/v1/users', Rotas);
app.use('/v1/users', RotasUser);


sequelize.sync().then(() => {

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});