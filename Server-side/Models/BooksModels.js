import mongoose from "mongoose";


const bookShema = new mongoose.Schema({
    booktitle:{
        type:String,
        required:[true,"please enter your book title "]
    },
    bookdes:{
        type:String,
        required:[true,"please enter your book des"]
    },
    bookpricesell:{
        type:Number,
        required:[true,'please enter your sell price']
    },
    bookpricesrent:{
        type:Number,
        required:[true,'please enter your rent price']
    },
    booksauthor:{
        type:String,
        required:[true,'please enter your authorname']
    },
    bookstock:{
        type:String,
        required:[true,"please enter your book stock "]
    },
    buyingoption:{
        type:String,
        required:[true,"please enter your book option"],
        enum:[
            "sell",
            "rent"
        ]
    },
    bookcategory:{
        type:String,
        enum:{
            values:[
                "fantacy",
                "fiction",
                "non-fiction",
                "horror",
                "comedy",
            ]
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})

const bookmodel =  mongoose.model("books",bookShema)

export default bookmodel;