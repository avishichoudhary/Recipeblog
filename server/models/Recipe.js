const mongoose=require('mongoose');

const recipeSchema= new mongoose.Schema(
  {
    name:{
      type:String,
      reqired:'This fild is required'
    },
    discription:{
      type:String,
      reqired:'This fild is required'
    },
    email:{
      type:String,
      reqired:'This fild is required'
    },
    ingredient:{
      type:Array,
      reqired:'This fild is required'
    },
    Category:{
      type:String,
      enum:['Thai','American','Chinese','Mexican'],
      reqired:'This fild is required'
    },
    image:{
      type:String,
      reqired:'This fild is required'
    },
  }
);

recipeSchema.index({name: 'text',description: 'text'});


module.exports=mongoose.model('Recipe',recipeSchema)