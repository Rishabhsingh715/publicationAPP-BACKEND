import express from "express";
import publicationRotes from './routes/publicationRoutes.js'
import conferenceRoutes from './routes/conferenceRoutes.js'
import departmentRoutes from './routes/departmentRoutes.js'
import journalRoutes from './routes/journalRoutes.js'
import researchRoutes from './routes/researchRoutes.js'
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import FaculityRoutes from './routes/faculityRoutes.js'




const app=express();
app.use(cors(corsOptions));

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
const uri='mongodb://localhost:27017/mydb'
const connectDB=async()=>{
    try{
        const conn= await mongoose.connect(uri,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log(`MongoDB connected:${conn.connection.host}`);
    }catch(error){
        console.log(`error:${error.message}`);
        process.exit(1)
    }
}

connectDB();
// app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/faculty',FaculityRoutes)
app.use('/api/publication',publicationRotes);
app.use('/api/conference',conferenceRoutes);
app.use('/api/department',departmentRoutes);
app.use('/api/journal',journalRoutes)
app.use('/api/research',researchRoutes)

app.listen(3000,console.log('Server Running on Port:',3000))