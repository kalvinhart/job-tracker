import { IAuthService } from "../interfaces/IAuthService";
import { UpdateUser } from "../types/UpdateUser";
import { UserCredentials } from "../types/UserCredentials";

export default class AuthService implements IAuthService {
  api: IAuthService;

  constructor(api: IAuthService) {
    this.api = api;
  }

  async registerUser(userCredentials: UserCredentials): Promise<string> {
    return await this.api.registerUser(userCredentials);
  }

  async signIn(userCredentials: UserCredentials): Promise<string> {
    return await this.api.signIn(userCredentials);
  }

  signOut(): void {
    return this.api.signOut();
  }

  authStateChange(updateUser: UpdateUser): any {
    return this.api.authStateChange(updateUser);
  }

  async sendResetEmail(email: string): Promise<void> {
    return await this.api.sendResetEmail(email);
  }
}
