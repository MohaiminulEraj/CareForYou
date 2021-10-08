import mongoose from 'mongoose';

// const MONGODB_URI = process.env.DB_LOCAL_URI

// if (!MONGODB_URI) {
//     throw new Error(
//         'Please define the MONGODB_URI environment variable inside .env.local'
//     )
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose

// if (!cached) {
//     cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
//     if (cached.conn) {
//         return cached.conn
//     }

//     if (!cached.promise) {
//         const opts = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             bufferCommands: false,
//             bufferMaxEntries: 0,
//             useFindAndModify: true,
//             useCreateIndex: true
//         }

//         cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
//             return mongoose
//         })
//     }
//     cached.conn = await cached.promise
//     return cached.conn
// }




const conn = process.env.DB_LOCAL_URI;
// const conn = process.env.DB_ATLAS_URI;
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

    // try {
    //     // await mongoose.connect('mongodb+srv://eraj2:12345678abcd@cluster0.mrove.mongodb.net/careforyou?retryWrites=true&w=majority', {
    //     await mongoose.connect('mongodb://localhost:27017/careforyou', {

    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useCreateIndex: true,
    //     });
    //     if (process.env.NODE_ENV !== 'test') console.log(`Connected to database`);
    // } catch (error) {
    //     console.log(error.message);
    //     // process.exit(1);
    // }

    // if (mongoose.connection.readyState >= 1) {
    //     return;
    // }
    //     mongoose.connect(process.env.DB_LOCAL_URI, {
    //         useNewUrlParser: true,
    //         useCreateIndex: true,
    //         useUnifiedTopology: true,
    //         useFindAndModify: false
    //     }).then(con => console.log('Connected to local database.'));
}

export default dbConnect