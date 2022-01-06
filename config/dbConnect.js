import mongoose from 'mongoose';

// const conn = process.env.DB_LOCAL_URI;
const conn = process.env.DB_URI;
const dbConnect = async () => {
    try {
        await mongoose.connect(conn, {
            useNewUrlParser: true,
            // strictPopulate: false,
            // useCreateIndex: true,
            // useUnifiedTopology: true,
            // useFindAndModify: true,
            // bufferCommands: false,
            // bufferMaxEntries: 0,
        });
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

}

export default dbConnect