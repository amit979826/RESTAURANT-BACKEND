import app from './app.js';
import { dbConnection } from './database/dbConnection.js';

dbConnection();

if(process.env.VERCEL !== "1"){
  const PORT = process.env.PORT || 4000;

  app.listen(process.env.PORT,()=>{
  console.log(`server Running On Port ${process.env.PORT}`);  
})
}

