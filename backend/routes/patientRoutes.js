const express = require('express');
const { crearPaciente, mostrarPaciente, actualizarPaciente, eliminarPaciente } 
= require('../controller/patientController');
const router = express.Router();
// Ruta para crear un paciente
router.post('/patients', crearPaciente);
// Ruta para obtener todos los pacientes
router.get('/patients', mostrarPaciente);
// Ruta para actualizar un paciente
router.put('/patients/:id', actualizarPaciente);
// Ruta para eliminar un paciente
router.delete('/patients/:id', eliminarPaciente);
module.exports = router;
