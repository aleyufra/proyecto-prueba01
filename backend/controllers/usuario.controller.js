const Usuario = require ('../models/usuario') 
const usuarioCtrl = {}

usuarioCtrl.createUsuario = async (req, res)=>{ //en req.body se espera que vengan los datos de usuario a crear 
   const usuario = new Usuario (req.body);
   try { 
      await usuario.save(); 
      res.status(200).json({ 
         'status': '1', 
         'msg': 'Usuario creado correctamente.' 
      }) 
   } catch (error) { 
      res. status(400).json({ 
         'status': '0', 
         'msg': 'Error procesando operacion.' 
      }) 
   } 
}

usuarioCtrl.loginUsuario = async (req, res) => { //en req.body se espera que vengan las credenciales de login 
   //defino los criterios de busqueda en base al username y password recibidos 
   const criteria = { 
      username: req.body.username, 
      password: req.body.password 
   }

   try { //el método findOne retorna un objeto que cumpla con los criterios de busqueda 
      const user = await Usuario.findOne(criteria); 
      if (!user) { 
         res.json({ 
            status: 0, 
            msg: "el usuario o contraseña son incorrectas" 
         }) 
      } else { 
         res.json({ 
            status: 1, 
            msg: "success", 
            username: user.username, //retorno información útil para el frontend 
            perfil: user.perfil, //retorno información útil para el frontend
            userid: user._id //retorno información útil para el frontend 
         }) 
      } 
   } catch (error) { 
      res.json({ 
         status: 0,
         msg: 'error con la api login' 
      }) 
   } 
}

//exportacion del modulo controlador 
module.exports = usuarioCtrl;