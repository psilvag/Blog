
// middleware para proteger rutas

//==================DEPENDENCIAS================================
//Passport tiene diferentes estrategias para manejar logins
//por ejemplo facebook,google, jwt,bearer

const jwtStrategy=require('passport-jwt').Strategy 
const extractJwt=require('passport-jwt').ExtractJwt // Aqui usamos el tipo de estrategia jwt, extrae el valor del token para hacer las validaciones
const passport = require('passport')// permite decodificar tokens, validad rutas etc

//==================ARCHIVOS CREADOS ==========================
const jwtSecret = require('../config').api.jwt_secret
const {findUserById} = require('../src/users/users.controllers')


  const options={
        // busca en los headers y toma los tokens que inician con JWT
        jwtFromRequest:extractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey:jwtSecret
        
  }

  passport.use(
    new jwtStrategy(options, async (tokenDecoded,done)=>{  // done es una funcion recibe dos parametros
      // el done recibe (error,tokendecoded)
       try{
         const user=await findUserById(tokenDecoded.id)
         if(!user){
            return done(null,false) // no hay error ni existe en  usuario 
         }
            return done(null,tokenDecoded) //  no hay error pero si existe el usuario, no le pasamos el usuario sino el token decodificado
       }
       
       catch(error){
          return done(error,false) // hay error pero no existe el usuario
       }
    })
  )


module.exports=passport


