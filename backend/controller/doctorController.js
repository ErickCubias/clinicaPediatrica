const mongoose = require('mongoose');
const Doctor = require('../models/Doctor');

// creacion del crud

//crear doctor

const crearDoctor=async(req, res)=>{

    try{
        const nuevoDoctor=new Doctor(req.body);
        await nuevoDoctor.save();
        res.status(201).json({message: 'Doctor creado exitosamente',
            doctor: nuevoDoctor });
    }catch(error){
        res.status(500).json({ message: 'Error al crear el doctor', error });
    }
};

//mostrar doctor

const mostrarDoctor=async(req, res)=>{
    try{
        const doctores=await Doctor.find();
        res.status(200).json(doctores);    
    }
    catch(error){
        res.status(500).json({message: 'Error al obtener los doctores', error});
    }
};
// Actualizar un doctor
const actualizarDoctor = async (req, res) => {
    try {
        // Log para verificar el ID recibido
        console.log("ID recibido: ", req.params.id);
        // Log para verificar el body recibido
        console.log("Datos del doctor recibidos: ", req.body);
        
        // Actualizar el doctor en la base de datos
        const doctorActualizado = await Doctor.findByIdAndUpdate(
            req.params.id, // El id del doctor a actualizar
            req.body, // Los nuevos datos que serán actualizados
            { new: true } // Para que devuelva el doctor actualizado
        );

        // Verificar si el doctor fue encontrado y actualizado
        if (!doctorActualizado) {
            return res.status(404).json({ message: 'Doctor no encontrado' });
        }
        
        // Si la actualización fue exitosa, devolver el doctor actualizado
        res.status(200).json({ message: 'Doctor actualizado', doctor: doctorActualizado });
    } catch (error) {
        // Imprimir error 
        console.error("Error al actualizar el doctor:", error);
        res.status(500).json({ message: 'Error al actualizar el doctor', error });
    }
};

// Eliminar un doctor
const eliminarDoctor = async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Doctor eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el doctor', error });
    }
};

module.exports = {
    crearDoctor,
    mostrarDoctor,
    actualizarDoctor,
    eliminarDoctor,
};
