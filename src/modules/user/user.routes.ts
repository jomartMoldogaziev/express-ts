import { Router } from "express";
import todoContrloller from "./user.controller";

const router = Router();

router.get("/get-all", todoContrloller.getUsers);

export default router;