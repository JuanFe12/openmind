import { InjectRepository } from "typeorm-typedi-extensions";
import { UserService } from "../services/user.service";
import { UserValidator } from "../validators/user.validator";

export class UserController {
  constructor(@InjectRepository() private userService: UserService) {}

   userCreate(userInput: UserValidator) {
      const user = this.userService.createUser(userInput);
      return user;
   }

   userUpdate(id: string, user: any) {
      const updatedUser = this.userService.updateUser(id, user);
      return updatedUser;
    }

    userDelete(id: string) {
      const deletedUser = this.userService.deleteUser(id);
      return deletedUser;
    }
}