import { Router } from "express";
import { UserController} from "../controllers/user.controller";

const router = Router();
router.post("/user", UserController);


export default router;