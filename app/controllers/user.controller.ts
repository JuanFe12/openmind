import { UserServices } from './../services/user.service';
export class UserController{

  async userCreate(req:any, res: any){
    const {firstName, lastName, isAteacher,email, password, repeatPassword} = req.body
    const user = new UserServices().SingUp(firstName, lastName, isAteacher,email, password, repeatPassword)
    return{
      statusCode:200,
      message: 'The password is wrong',
      body: user
    }
  }

  async userDelete(req:any){
    const {id} = req.body
    const user = new UserServices().deleteUser(id)
    return{
      statusCode: 200,
      message: 'user has been successfully removed',
      body: user
    }
  }

  async userUpdate(req:any){
    const {firstName, lastName,email, password} = req.body
    const user = new UserServices().updateUser(firstName, lastName,email, password)
    return{
      statusCode:200,
      message: 'user has been successfully update',
      body: user
    }
  }
} 

export default UserController;