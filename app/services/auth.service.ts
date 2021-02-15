import { AuthUser } from './../repositories/auth.repositorie';



export class AuthService{
   static login(email: any) {
    new AuthUser().login(email)
     }
 }
