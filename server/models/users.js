const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Must provide your name'],
        trim:true,
        maxlength: [20,'name must not exceed 20 characters']
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        validate: {
          validator: function(v) {
            return /^\d+$/.test(v);
          },
          message: props => `${props.value} is not a valid age!`
        }
      },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
          },
          message: props => `${props.value} is not a valid email address!`
        }
      },
    salary: {
        type: Number,
        required: true,
        min: 1000,
        validate: {
          validator: function(v) {
            return /^\d{1,}(000)$/.test(v);
          },
          message: props => `${props.value} is not a valid salary in INR! The salary must be at least 1000 and end with 000.`
        }
      },
    
    
})