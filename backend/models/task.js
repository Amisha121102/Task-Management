const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    dueDate:{
        type: Date,
        default: new Date(),
    },
    completed:{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true,
});

module.exports=mongoose.model('Task',taskSchema);