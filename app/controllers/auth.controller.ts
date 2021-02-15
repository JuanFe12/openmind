
  import { AuthService } from "../services/auth.service";
  

  class AuthController {
  
    login(email: any) {
      const user = AuthService.login(email);
      return user;
    }
  }
  export default AuthController;