const mongoose=require('mongoose')
const invoiceSchema=new mongoose.Schema({
    invoice_number:{
        type:Number,
        required:true,
        unique:true
    },
    user_email:{
        type:String,
        required:true
    },
    Receiver_name:{
        type:String,
        required:true
    },
    Receiver_Address:{
        type:String,
        required:true
    },
    Invoice_date:{
        type:Date,
        default:Date.now
    },
    Due_date:{
        type:Date,
        required:true
    },
    Products:[
        {item:{type:String,required:true},Quantity:{type:Number,required:true},Price:{type:Number,required:true},Discount:{type:Number,required:true},Total:{type:Number,required:true}}
    ],
    Status:{
        type:String,
        required:true
    },
    paid_amount:{
        type:Number,
        required:true
    },
    remaining_amount:{
        type:Number,
        required:true
    }
    
})
module.exports=mongoose.model("invoicedata",invoiceSchema)