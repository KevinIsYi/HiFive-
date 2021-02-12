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

app.use('/public/images', express.static(`${__dirname}/public/images`));

app.use('/api/items', require('./routes/products'));