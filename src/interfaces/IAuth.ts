import { Response } from "express";

const statusCodesKeyVal = {
  200 : "OK",
  201 : "Created",
  202 : "Accepted",
  400 : "Bad Request",
  401 : "Unauthorized",
  403 : "Forbidden",
  404 : "Not Found",
  500 : "Internal Server Error",
  502 : "Bad Gateway",
  503 : "Service Unavailable"
} as const;

export const statusResponse = () => {
  type statsKey = keyof typeof statusCodesKeyVal;

  const getResponse = (code: statsKey) => {
    return statusCodesKeyVal[code];
  }

  return {
    getResponse
  }
}

type statusCodeKey = keyof typeof statusCodesKeyVal;
export type statusCodeVal = typeof statusCodesKeyVal[statusCodeKey]

interface Data {
  message ?: string;
  data: any;
}

export interface IResponse {
  status: statusCodeVal,
  data: Data
}


