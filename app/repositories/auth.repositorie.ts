import { User } from './../models/user.model';
import { Repository } from "typeorm";


//infrastructure
  export class AuthUser extends Repository<User>{

    async login(email:any){
        const user = await this.find(email)
        return user
    }
 }
