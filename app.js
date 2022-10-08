// .env
require('dotenv').config();

const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index'); 

const app = express();
app.use(express.json());
app.use('/api/v1/', routes);

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB:', error);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listing on PORT ${PORT}`);
});
