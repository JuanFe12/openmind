import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from "../repositories/user.repositorie";
import jwt from "jsonwebtoken";

@Service()
export class AuthService {
  private PRIVATE_KEY: string = "ñhpf98q34yp9rqoiar";
  private expirationDate = 24 * 50 * 60;
  constructor(@InjectRepository() private authRepository: UserRepository) {}

  async Register(inputData: any): Promise<any> {
    try {
      inputData.password = await this.authRepository.encryptPassword(
        inputData.password
      );
      const user = await this.authRepository.save(inputData);
      user.token = await this.generateWebToken(user.id);
      return user;
    } catch (error) {
      return error;
    }
  }

  async verifyToken(token: string): Promise<any> {
    const tokenUser = await jwt.verify(token, this.PRIVATE_KEY);

    if (tokenUser) {
      return tokenUser;
    }

    return null;
  }

  async login(inputData: any): Promise<any> {
    try {
      const user = await this.authRepository.findOne({
        email: inputData.email,
      });
      if (user) {
        const currentPassword: string = user.password;
        const userIsValid = await this.authRepository.comparedPassword(
          inputData.password,
          currentPassword
        );
        return user;
      } else {
        return false;
      }
      // return user
    } catch (error) {
      error(error);
    }
  }

  async generateWebToken(id: string): Promise<any> {
    try {
      const token = await jwt.sign({ id }, this.PRIVATE_KEY, {
        expiresIn: this.expirationDate,
      });
      return token;
    } catch (error) {
      console.log(error);
    }
  }
}