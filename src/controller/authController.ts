import { Request, Response } from "express"
import { sendResponse } from "../globals/responses"

const signinController = async(req: Request, res: Response): Promise<Response> => {
  return await sendResponse(200,{id: "12345"},res)
}


export default {
  signinController
}