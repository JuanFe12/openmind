import { User } from './../models/user.model';
import { Repository } from "typeorm";


//infrastructure
  export class UserRepository extends Repository<User>{

   async Add(firstName:string, lastName:string, isAteacher:boolean, 
    email:string, password:string){
     const user = await this.create({firstName, lastName, isAteacher,email, password})
     return user
   }

   async Delete(id:string){
      const userDelete = await this.delete(id);
      return userDelete;
   }

   async Update (firstName:string, lastName:string, email:string, password:string){
      const user = await this.update({firstName, lastName,email, password})
      return user
    }

 }
