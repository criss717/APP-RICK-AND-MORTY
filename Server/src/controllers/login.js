const { User } = require("../DB_connection");
module.exports = async (req, res) => {
    try {
        const { email, password } = req.query;
        if (!email || !password) return res.status(400).send('Faltan datos')
        const UserEmail = await User.findAll({ where: { email } }) // buscamos por email si coinciden con alguno en la base de datos
        if (UserEmail.length===0) return res.status(404).json({
            access: false,
            message: 'Usuario no encontrado'
        })
        const UserPass = await User.findAll({ where: {password } }) // buscamos por password si coinciden con alguno en la base de datos
        if (UserPass.length===0) return res.status(403).json({
            access: false,
            message: 'Contraseña incorrecta'
        })

        return res.json({ // si ambas validaciones se cumplen
            access: true
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


