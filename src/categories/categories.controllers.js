const Categories = require('../models/categories.models')

const getAllCategories= async ()=>{
     const data= await Categories.findAll()
     return data
}

 // require rol middleware
const createCategory = async (obj) => {
    const data= await Categories.create({
          name:obj.name   
    })
    return data
}

 // require rol middleware
 const updateCategory = async (id,obj) => {
     const data= await Categories.update(obj,{
          where:{
              id:id
          }
     })
     return data[0]
  }
  
 // require rol middleware
const deleteCategory = async (id) => {
   const data= await Categories.destroy({
        where:{
            id:id
        }
   })
   return data
}

//============MY CATEGORIES===============




module.exports = {
getAllCategories,
createCategory,
updateCategory,
deleteCategory

 }
