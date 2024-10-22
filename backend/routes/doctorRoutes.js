const express = require('express');

console.log("Doctor routes loaded"); // Para verificar que las rutas se están cargando

const { crearDoctor, mostrarDoctor, actualizarDoctor, eliminarDoctor } 
= require('../controller/doctorController');

const router = express.Router();
// Ruta para crear un paciente
router.post('/doctors', crearDoctor);
// Ruta para obtener todos los pacientes
router.get('/doctors', mostrarDoctor);
// Ruta para actualizar un paciente
router.put('/doctors/:id', actualizarDoctor);
// Ruta para eliminar un paciente
router.delete('/doctors/:id', eliminarDoctor);
module.exports = router;