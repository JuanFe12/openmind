import { UserController } from './../controllers/user.controller';
import { Router } from "express";
import AuthController from '../controllers/auth.controller';

const router = Router();

//User
router.post("/user", new UserController().userCreate);
router.delete("/userdelete", new UserController().userDelete);
router.put("/userupdate", new UserController().userUpdate);

//Auth
router.post("/user", new AuthController().login);


export default router;