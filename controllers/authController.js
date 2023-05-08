import { User } from "../models/userModel.js";

const signUp = async (request, response, next) => {
  try {
    const newUser = await User.create({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      passwordConfirm: request.body.passwordConfirm,
    });

    response.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export { signUp };
