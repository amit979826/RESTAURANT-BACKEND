import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
// import {dbConnection} from "./database/dbConnection.js"
import {errorMiddleware} from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js"

const app = express()
dotenv.config({path:"./config/config.env"}) 

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:5173"
    ],
    credentials: true,
  })
);


// IMPORTANT: handle preflight
// app.options("*", cors());



app.get("/", (req, res) => {
  res.send("Restaurant Backend API is running 🚀");
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/reservation",reservationRouter);   

// dbConnection();

app.use(errorMiddleware);

export default app