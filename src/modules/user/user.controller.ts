import { Request, Response } from "express";

interface UserType {
  name: string;
  description: string;
}

const getUsers = async (req: Request, res: Response) => {

try {
    const data: UserType[] = [
      {
        name: "Sample User",
        description: "This is a sample user item."
      }
    ];
    res.status(200).send({
        success: true,
        data: data,
    }); 
  } catch (e){
    console.error("Error in getTodos:", e);
  }  
};
export default { getUsers };