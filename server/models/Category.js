const mongoose=require('mongoose');

const categorySchema= new mongoose.Schema(
  {
    name:{
      type:String,
      reqired:'This fild is required'
    },

    image:{
      type:String,
      reqired:'This fild is required'
    },
  }
);

module.exports=mongoose.model('Category',categorySchema)