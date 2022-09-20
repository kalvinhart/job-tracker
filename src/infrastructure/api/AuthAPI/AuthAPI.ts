import { IAuthService } from "../../interfaces/IAuthService";
import { UserResponse } from "../../types/Response";
import { UserCredentials } from "../../types/UserCredentials";
import { makeApiInstance } from "../api.config";

export default class AuthAPI implements IAuthService {
  async registerUser(userCredentials: UserCredentials): Promise<UserResponse> {
    const { email, password } = userCredentials;

    const api = makeApiInstance();
    const response = await api.post("/users/create", { email, password });
    return response.data;
  }

  async signIn(userCredentials: UserCredentials): Promise<UserResponse> {
    const { email, password } = userCredentials;

    const api = makeApiInstance();
    const response = await api.post("/users/login", { email, password });
    return response.data;
  }

  signOut(): void {}
}
