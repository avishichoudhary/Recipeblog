const express=require("express");

const router=express.Router();

const recipeController=require('../controlers/recipeController');

router.get('/',recipeController.homepage);

module.exports=router;
