import mongoose from 'mongoose';

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(con => console.log('Connected to local database.'));
}

export default dbConnect