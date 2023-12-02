import { Request, Response } from "express";
import * as authServices from "../services/Auth";
import { errorResponse, successResponse } from "../utils/response";

export const register = async (req: Request, res: Response): Promise<void> => {
   try {
      const { body } = req;
      await authServices.register(body);

      successResponse(res, 200);
   } catch (error) {
      if (error instanceof Error) {
         errorResponse(res, 400, error.message);
      } else {
         errorResponse(res, 500, "Internal Server Error!");
      }
   }
};

export const login = async (req: Request, res: Response): Promise<void> => {
   try {
      const { body } = req;
      const token = await authServices.login(body);

      successResponse(res, 200, token);
   } catch (error) {
      if (error instanceof Error) {
         errorResponse(res, 400, error.message);
      } else {
         errorResponse(res, 500, "Internal Server Error!");
      }
   }
};
