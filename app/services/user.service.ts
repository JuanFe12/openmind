
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from "../repositories/user.repositorie";

//domain
export class UserServices{
  
  async SingUp(
     firstName:string, lastName:string, isAteacher:boolean, 
     email:string, password:string, repeatPassword:string){
     if (password === repeatPassword){
       new UserRepository().Add(firstName, lastName, isAteacher , email, password)
     }
   }

   async deleteUser(id: string){
     new UserRepository().Delete(id)
   }

   async updateUser(firstName:string, lastName:string, email:string, password:string){
    new UserRepository().Update(firstName, lastName, email, password)
  }
}

