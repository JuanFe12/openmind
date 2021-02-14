
  import { AuthService } from "../services/auth.service";
  import { UserValidator } from "../validators/user.validator";
  

  class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    
    register(userInput: UserValidator) {
      const user = this.authService.Register(userInput);
      return user;
    }
  
    login(userInput: any) {
      const user = this.authService.login(userInput);
      return user;
    }
  }
  export default AuthController;