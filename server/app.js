const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const vitimaRoutes = require('./routes/vitima');
 
const app = express();
 
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
 
app.use(helmet());
 
app.use(express.json());
 
app.use(morgan('dev'));

app.use('/vitima', vitimaRoutes);
  
module.exports = app;