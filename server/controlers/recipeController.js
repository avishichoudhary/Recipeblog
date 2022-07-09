const Category = require('../models/Category');

require('../models/database')

exports.homepage=async(req,res)=>{



  try {

    const limitNumber=5;
    const categories=await Category.find({}).limit(limitNumber);
    
    res.render('index',{title:'Cooking Blog-home',categories});
  } catch (error) {
    res.status(500).send({message:error.message || "Error Occured"})
  }

  
}



















// async function insertDymmyCategoryData(){
//   try{
//     await Category.insertMany([
//       {
//         "name":"Thai",
//         "image":"thai food"
//       },
//       {
//         "name":"Thai",
//         "image":"thai food"
//       },
//       {
//         "name":"Thai",
//         "image":"thai food"
//       },
//       {
//         "name":"Thai",
//         "image":"thai food"
//       },
//       {
//         "name":"Thai",
//         "image":"thai food"
//       }
//     ]);
//   }catch(error){
//     console.log(error)
//   }
// }

// insertDymmyCategoryData();