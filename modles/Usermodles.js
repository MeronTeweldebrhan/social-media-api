import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
     type: String,
     required: true,
     unique: true,
     trim: true,
     minlength: [4, 'username must be at least 4 characters long']
  },
  email: {
     type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,                       // Converts email to lowercase
    match: [/.+\@.+\..+/, 'Please enter a valid email address'] // Regex 
  },
  password: {
     type: String,
     required: true
  },
  age: {
    type: Number,
    min: [18, 'Must be at least 18 years old'], // Minimum value
    max: 120                                  // Maximum value
  },
  isVerified: {
     type: Boolean,
     default: false,                     // Default value is false
     immutable: true                     // Cannot be changed after creation
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],            // The value must be one of these strings
      message: '{VALUE} is not a supported role'
    },
    default: 'user'                         // If not provided, defaults to 'user'
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),              // Sets the value to the current date/time
    immutable: true                         // Cannot be changed after creation
  }
});

const User = mongoose.model("User", userSchema);

export default User;
