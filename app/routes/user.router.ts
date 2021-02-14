import { UserController } from './../controllers/user.controller';
import { Router } from "express";

const router = Router();

//User
router.post("/user", new UserController().userCreate);
router.delete("/userdelete", new UserController().userDelete);
router.put("/userupdate", new UserController().userUpdate);


export default router;