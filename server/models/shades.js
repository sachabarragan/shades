const mongoose = require('mongoose');

const { Schema } = mongoose;

const ShadesSchema = new Schema ({
    tipo:       { type: String, required: true },
    precio:     { type: Number, required: true },
    numero:     { type: Number, required: true },
    sector:     { type: String, required: true},
    comentario: { type: String, required: false}    
});

module.exports = mongoose.model('Shades', ShadesSchema);