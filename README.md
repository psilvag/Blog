

BLOG API EXPRESS

MODELS

-USERS
-POSTS
-CATEGORIES
-COMENTS
-LIKES

Auth
-sign up    /auth/register
-login        /auth/login

// errores al compilar 
version de bcrypt
solucion: ejecutar 
rmdir node_modules\bcrypt -Recurse

esto remueve la carpeta bcrypt de node modules de forma recursiva
luego volver a instalar bcrypt
npm install bcrypt

//CREATE USER
"firstName":"Pablo",
"lastName":"Silva",
"userName":"psilva",
"email":"psilva@gmail.com",
"password":"******",
"age":30,
"country":"BOL"



//PATCH USER
{
  
"firstName":"Priscila",
"lastName":"Estrada",
"userName":"priscila",
"email":"priscila@gmail.com",
"age":39,
"country":"ECU"
}

// CREATE POST
{
  "title":"Humanoid robots in the world",
  "content":"content about robots",
  "categoryId":"a86cb0b6-01c2-4a6f-833e-c844c0b3d672"
}