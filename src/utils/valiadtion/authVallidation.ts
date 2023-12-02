import Joi, { ValidationResult, Schema } from "joi";

const userRegisterSchema: Schema = Joi.object({
   name: Joi.string().min(3).required(),
   phone: Joi.string().min(9).required(),
   email: Joi.string().email().required(),
   username: Joi.string().min(3).required(),
   password: Joi.string().min(4).required(),
});

const userLoginSchema: Schema = Joi.object({
   username: Joi.string().min(3).required(),
   password: Joi.string().min(4).required(),
});

export function validateUserRegister(data: any): ValidationResult {
   return userRegisterSchema.validate(data, { abortEarly: false });
}

export function validateUserLogin(data: any): ValidationResult {
   return userLoginSchema.validate(data, { abortEarly: false });
}
