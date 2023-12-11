import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import authRoutes from './routes/AuthRoutes.js'

dotenv.config();
const port = process.env.PORT

const corsOptions = {
    origin:true,
    credentials: true
}

const app = express();

mongoose.set('strictQuery', false)
const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('database is connected')   
    }catch(error){
        console.log(error);
    }
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', authRoutes)

app.listen(port, () => {
    connectDb();
    console.log(`app is listening on port ${port}`);
})