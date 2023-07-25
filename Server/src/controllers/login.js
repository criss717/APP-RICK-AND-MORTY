const users = require('./users')
module.exports = (req, res)=>{
    const {email} = req.query;
    const {password} = req.query;   
    const validator=users.findIndex((elem)=> elem.email===email && elem.password===password)
    if(validator>=0) return res.status(200).json({access:true}) // si coinciden credenciales
    return res.status(200).json({access:false})
}