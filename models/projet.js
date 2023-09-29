const mongoose = require('mongoose');

    const UserSchema = new mongoose.Schema({
        NomDuProjet: String,
        Description: String,
        Technologies: String,
        DateDébut: Date,
        DateFin: Date
    });

    module.exports = mongoose.model('projet', UserSchema);