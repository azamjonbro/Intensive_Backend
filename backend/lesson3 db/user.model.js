const userModel = {
    FirstName:{
        type:String,
        required:true,
        default:"User"
    },
    LastName:{
        type:String,
        default:"User"
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: function(v) {
                return /\+998[0-9]{9}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    Jins:{
        type:String,
        required:true,
        enum:["Erkak","Ayol","Male","Female"]
    },
    age:{
        type:Number,
        required:true,
        min:16,
        max:120,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        },

    },
    TeacherID:{
        type:String,
        required:true,
        unique:true,
    },
    GroupID:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
};

module.exports = userModel;