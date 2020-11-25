const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/config');

dotenv.config();
const app = express();
dbConnection();

app.use( express.json() );
app.use( cors() );


app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`);
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/items', require('./routes/items'));
app.use('/api/purchase', require('./routes/userPurchases'));