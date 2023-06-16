const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/products', require('./app/routes/productRouter'));
app.use('/reviews', require('./app/routes/reviewRouter'));
app.use('/users', require('./app/routes/userRouter'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
