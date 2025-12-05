import { Router } from "express";
import todoContrloller from "./todo.controller";

const router = Router();

router.get("/get-all", todoContrloller.getTodos);
router.post("/create", todoContrloller.createTodo);
router.delete("/delete/:id", todoContrloller.deleteTodo);
router.put("/update/:id", todoContrloller.updateTodo);
router.patch("/update-part/:id", todoContrloller.patchTodo);



export default router;