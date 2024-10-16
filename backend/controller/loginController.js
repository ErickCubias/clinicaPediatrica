const User = require('../models/User');
const loginUser = async (req, res) => {
const { username, password } = req.body;
// Agrega esta línea para ver qué datos están siendo recibidos
console.log("Datos recibidos:", req.body); 
try {
// Buscar usuario en la base de datos
const user = await User.findOne({ username });
console.log(user); // <-- Agrega esta línea para ver si se encuentra el usuario
if (!user) {
return res.status(400).json({ message: 'Usuario no encontrado' });
}
// Comparar contraseñas en texto plano
if (user.password !== password) {
return res.status(400).json({ message: 'Credenciales inválidas' });
}
// Respuesta de éxito
res.json({ message: 'LOGIN EXITOSO' });
} catch (error) {
    console.log(error);
res.status(500).json({ message: 'Error en el servidor', error });
}
};
module.exports = { loginUser };