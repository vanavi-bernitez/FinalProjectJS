import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

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
    validate: {
      // this validator only gonna work with .save and .create (authController.js)
      // so if i wanna update a user i may use .save
      validator: function (passwordConfirmElement) {
        return passwordConfirmElement === this.password;
      },
      message: "Passwords are not the same",
    },
  },
});

//between getting data and saving it on the database
userSchema.pre("save", async function (next) {
  // this funct only works if password was modified
  if (!this.isModified("password")) return next();
  // hash password with cost of 8. Async to not block other users
  this.password = await bcrypt.hash(this.password, 8);
  //confirm is only required input, and i dont need to store twice the password
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

export { User };
