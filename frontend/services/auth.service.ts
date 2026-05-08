import { api } from "./axios";
import {LoginDTO} from "@shared/dto/auth/login.dto"


export const login = async (data: LoginDTO) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const getMe = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};

export const logout = async () => {
  await api.post("/auth/logout");
};
