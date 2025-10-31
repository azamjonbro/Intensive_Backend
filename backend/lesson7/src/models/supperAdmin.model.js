const { Schema } = require('mongoose');

const SupperAdminSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        required: true, 
        enum: ["superAdmin"] 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    }
})

const SupperAdmin = mongoose.model('SupperAdmin', SupperAdminSchema);
module.exports = SupperAdmin;