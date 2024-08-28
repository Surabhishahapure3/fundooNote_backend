import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  public newUser = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      name: Joi.string().min(4).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }


    
    next();
  };

  public emailValidate = (req:Request,res:Response,next:NextFunction):void =>{
    const schema = Joi.object({
      email: Joi.string().required(),
      password : Joi.string().min(6).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  }

  public register = (req:Request, res:Response,next:NextFunction): void=>{
    const schema = Joi.object({
      firstname: Joi.string().min(4).required(),
      lastname : Joi.string().min(4).required(),
      email : Joi.string().email().min(3).required(),
      password : Joi.string().min(6).required(),
      confirmpassword : Joi.string().valid(Joi.ref("password")).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  }

  
}

export default UserValidator; 