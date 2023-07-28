const users = require('../utils/users')
module.exports = (req, res)=>{
    const {email} = req.query;
    const {password} = req.query;   
    const validator=users.findIndex((elem)=> elem.email===email && elem.password===password)
    if(validator>=0) return res.status(200).json({access:true}) // si coinciden credenciales
    return res.status(401).json({ // si no coinciden credenciales
        access:false,
        message:'Email o contraseña incorrecta'
    })
}
