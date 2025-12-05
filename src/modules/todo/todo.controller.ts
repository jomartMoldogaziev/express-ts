import { Request, Response } from "express";

interface TodoType {
  name: string;
  description: string;
}

const getTodos = async (req: Request, res: Response) => {

try {
    const data: TodoType[] = [
        {name: "Sample Todo",
        description: "This is a sample todo item."}
    ];
    res.status(200).send({
        success: true,
        data: data,
    }); 
  } catch (e){
    console.error("Error in getTodos:", e);
  }  
};
export default { getTodos };