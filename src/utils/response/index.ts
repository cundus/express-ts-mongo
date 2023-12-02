import { Response } from "express";

export const successResponse = (res: Response, status: number, data?: any) => {
   res.status(status).json({
      message: "Operation Success",
      data,
   });
};

export const errorResponse = (res: Response, status: number, message: any) => {
   res.status(status).json({
      message,
   });
};
