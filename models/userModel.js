import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field required"],
  },
  email: {
    type: String,
    required: [true, "email field required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "provide a valid email"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "password field required"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "confirm password field required"],
  },
});

const User = mongoose.model("User", userSchema);

export { User };