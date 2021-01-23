  
import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async encryptPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
 }