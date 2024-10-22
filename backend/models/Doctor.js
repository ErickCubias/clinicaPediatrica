const mongoose= require('mongoose');

const doctorSchema=mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    especialidad:{
        type: String,
        required: true,
    },
    correo:{
        type: String,
        required: true,
    }
});

module.exports=mongoose.model('doctor', doctorSchema);