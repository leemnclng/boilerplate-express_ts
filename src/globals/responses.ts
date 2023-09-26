import { Response } from "express";
import { IResponse, statusCodeVal, statusResponse } from "../interfaces/IAuth";

const getStats = statusResponse();

const sendData = (stats: statusCodeVal, data: any, message?: string): IResponse => {
  return {
    status: stats,
    data: {
      message: message,
      data: data
    }
  }
};

const sendResponse = async(code: number, data: any, res: Response, message?:string ): Promise<Response> => {
  switch (code) {
    case 400:
      return res.status(code).send(sendData(getStats.getResponse(code),data,message))
    default:
      return res.status(code).send(sendData(getStats.getResponse(200),data,message))
  }
}

export {
  sendResponse
}