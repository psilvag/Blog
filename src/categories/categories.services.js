const categoriesControllers = require('./categories.controllers')

 const getAllCategories=(req,res)=>{
    categoriesControllers.getAllCategories()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
         res.status(400).json({
            message:err.message
        })
    })
 }


const postCategory = (req, res) => {
    const name = req.body.name
    categoriesControllers.createCategory({name})
    .then(data=>{
        res.status(201).json(data)
    })
   .catch(err=>{
      res.status(400).json({message:err.message, 
        fields:{
         name:'string'
      }
      })
    })
}

const patchCategory = (req, res) => {
    const id = req.params.id
    const {name}=req.body
    categoriesControllers.updateCategory(id,{name})
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: `Category with id:${id}, Not Found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}


const deleteCategory = (req, res) => {
    const id = req.params.id
    categoriesControllers.deleteCategory(id)
        .then((data) => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: `Category with id:${id}, Not Found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}




module.exports= {
    getAllCategories,
    postCategory,
    patchCategory,
    deleteCategory
  
}
