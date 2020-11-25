const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.set('useFindAndModify', false);
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error ('Error at connecting to DB');
    }
}

module.exports = dbConnection;