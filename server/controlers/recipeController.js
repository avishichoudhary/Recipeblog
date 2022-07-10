const Category = require('../models/Category');
const Recipe = require('../models/Recipe');


require('../models/database')

exports.homepage=async(req,res)=>{



  try {

    const limitNumber=5;
    const categories=await Category.find({}).limit(limitNumber);

    const latest=await Recipe.find({}).sort({_id:-1}).limit(limitNumber)

    const thai= await Recipe.find({'category':'Thai'}).limit(limitNumber);

    const american= await Recipe.find({'category':'America'}).limit(limitNumber);

    const chinese= await Recipe.find({'category':'Chinesei'}).limit(limitNumber);

    const food={latest,thai,american,chinese};
    
    res.render('index',{title:'Cooking Blog-home',categories,food});
  } catch (error) {
    res.status(500).send({message:error.message || "Error Occured"})
  }

  
}

/*get categories */
exports.exploreCategories=async(req,res)=>{



  try {

    const limitNumber=20;
    const categories=await Category.find({}).limit(limitNumber);
    
    res.render('categories',{title:'Cooking Blog-View Blog',categories});
  } catch (error) {
    res.status(500).send({message:error.message || "Error Occured"})
  }

  
}

/* recipe :id

recioe pafe*/

exports.exploreRecipe=async(req,res)=>{
  try {

    let recipeId=req.params.id;

    const recipe=await Recipe.findById(recipeId);
   
    
    res.render('recipe',{title:'Recipe',recipeId});
  } catch (error) {
    res.status(500).send({message:error.message || "Error Occured"})
  }


}
/*GEt categories by id*/
exports.exploreCategoriesById=async(req,res)=>{



  try {

    let categoryId=req.params.id;

    const limitNumber=20;
    const categoryById=await Category.find({'category':categoryId}).limit(limitNumber);
    
    res.render('categories',{title:'Cooking Blog-View Blog',categoryById});
  } catch (error) {
    res.status(500).send({message:error.message || "Error Occured"})
  }

  
}

/* PSOT /search 

search */
exports.searchRecipe=async(req,res)=>{

   try {
    let searchTerm =req.body.searchTerm;
    let recipe=await Recipe.find({ $text : {$search : searchTerm,$diacriticSensitive:true}})
    res.render('search',{title:'Recipe-search',recipe});
   } catch (error) {
    res.status(500).send({message:error.message || "Error Occured"})
   }
   

}

/* *Explore latest gettt*/

exports.exploreLatest=async(req,res)=>{



  try {
    const limitNumber=20;
    const recipe=await recipe.find({}).sort({_id:-1}).limit(limitNumber);
    
    res.render('explore-latest',{title:'Cooking Blog-View Blog',recipe});
  } catch (error) {
    res.status(500).send({message:error.message || "Error Occured"})
  }
}


/* *Explore Random gettt*/

exports.exploreRandom=async(req,res)=>{



  try {
    
    let count =await Recipe.find().countDocument();
    let random=Math.floor(Math.random()*count)

    let recipe=await Recipe.findOne().skip(random).exec();

   
    
    res.render('explore-random',{title:'Cooking Blog-View Blog',recipe});
  } catch (error) {
    res.status(500).send({message:error.message || "Error Occured"})
  }
}

/* *submit recipe*/

exports.submitRecipe=async(req,res)=>{

  res.render('submit-recipe',{title:'Cooking Blog-View Blog'});

}

/*Post *submit recipe*/

exports.submitRecipeOnPost=async(req,res)=>{

  res.redirect('/submit-recipe');

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

//  insertDymmyCategoryData();


// async function insertDymmyRecipeData(){
//   try{
//     await Recipe.insertMany([
//             { 
//               "name": "Recipe Name Goes Here",
//               "description": `Recipe Description Goes Here`,
//               "email": "recipeemail@raddy.co.uk",
//               "ingredients": [
//                 "1 level teaspoon baking powder",
//                 "1 level teaspoon cayenne pepper",
//                 "1 level teaspoon hot smoked paprika",
//               ],
//               "category": "American", 
//               "image": "southern-friend-chicken.jpg"
//             },
//             { 
//               "name": "Recipe Name Goes Here",
//               "description": `Recipe Description Goes Here`,
//               "email": "recipeemail@raddy.co.uk",
//               "ingredients": [
//                 "1 level teaspoon baking powder",
//                 "1 level teaspoon cayenne pepper",
//                 "1 level teaspoon hot smoked paprika",
//               ],
//               "category": "American", 
//               "image": "southern-friend-chicken.jpg"
//             },
//           ]);
//   }catch(error){
//     console.log(error)
//   }
// }

// insertDymmyRecipeData();