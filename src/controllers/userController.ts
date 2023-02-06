import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { IUser } from '../interface';

export default async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data } = await userService.default(user);
  return res.status(status).json(data);
}