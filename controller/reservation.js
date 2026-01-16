import Errorhandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) =>{
    const {firstName, lastName, email, phone, date, time} = req.body;

    if(!firstName || !lastName 
        || !email || !phone 
        || !date || !time){
        return next(new Errorhandler("Please full fill reservation form!",400))
    }
    try{
        await Reservation.create
        ({firstName,
          lastName, 
          email, 
          phone, 
          date, 
          time});
     res.status(200).json({//Prevents accidental multiple responses.
            success:true,
            message:"Reservation Sent Successfully",
        })
    }
    catch(error){
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new Errorhandler(validationErrors.join(" , "),400))
        }
    }
};
