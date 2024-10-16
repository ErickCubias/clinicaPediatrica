const mongoose =require('mongoose');

const patientSchema=mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    direccion:{
        type: String,
        required: true,
    },
    telefono:{
        type: String,
        required: true,
    },
    historialMedico:{
        type: String,
        required: true,
    }
});

module.exports=mongoose.model('patient',patientSchema);