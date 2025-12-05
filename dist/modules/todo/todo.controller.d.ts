import { Request, Response } from "express";
declare const _default: {
    getTodos: (req: Request, res: Response) => Promise<void>;
    createTodo: (req: Request, res: Response) => Promise<void>;
    deleteTodo: (req: Request, res: Response) => Promise<void>;
    updateTodo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    patchTodo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default _default;
//# sourceMappingURL=todo.controller.d.ts.map