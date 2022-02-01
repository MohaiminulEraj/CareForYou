import mongoose from 'mongoose';
import colors from 'colors';

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
        console.log("Connected to database".cyan.bold);
    } catch (error) {
        console.log(`${error.message}`.red.underline.bold);
        process.exit(1);
    }

}

export default dbConnect