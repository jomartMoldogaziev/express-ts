import { Router } from "express";
import todoContrloller from "./todo.controller";

const router = Router();

router.get("/get-all", todoContrloller.getTodos);

export default router;