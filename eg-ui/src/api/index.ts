import axios from "axios";
import { baseUri } from "./constants";
import { SignInType, SignUpType } from "./types";
import bcrypt from "bcryptjs-react";

export const handleSignIn = async (payload: SignInType) => {
  try {
    const response = await axios.post(`${baseUri}/auth/login`, {
      email: payload.email,
      password: payload.password,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
export const handleSignUp = async (payload: SignUpType) => {
  try {
    const response = await axios.post(`${baseUri}/auth/signup`, {
      email: payload.email,
      password: payload.password,
      firstName: payload.firstName,
      lastName: payload.lastName,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const makeHashFromPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};
