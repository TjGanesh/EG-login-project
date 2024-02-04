import axios from "axios";
import bcrypt from "bcryptjs-react";
import { BASE_URL, API_ENDPOINTS } from "./constants";
import { SignInType, SignUpType, responseStatus } from "./types";


export const handleSignIn = async (payload: SignInType) => {
  try {
    const response = await axios.post(`${BASE_URL}${API_ENDPOINTS.LOGIN}`, {
      email: payload.email,
      password: payload.password,
    });

    const isValid = await validatePassword(payload.password, response.data.password || '');
    return isValid ? responseStatus.SUCCESS : responseStatus.ERROR;
  } catch (error) {
    return responseStatus.ERROR;
  }
};

export const handleSignUp = async (payload: SignUpType) => {
  try {
    const response = await axios.post(`${BASE_URL}${API_ENDPOINTS.SIGNUP}`, {
      email: payload.email,
      password: payload.password,
      firstName: payload.firstName,
      lastName: payload.lastName,
    });

    return response ? responseStatus.SUCCESS : responseStatus.ERROR;
  } catch (error) {
    return responseStatus.ERROR;
  }
};

export const makeHashFromPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

export const validatePassword = async (password: string, dbHash: string) => {
  const isValid = await bcrypt.compare(password, dbHash);
  return isValid;
};
