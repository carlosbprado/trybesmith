import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { IUser } from '../interface';

export function getAll() {
  console.log('rest');
}

export async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data } = await userService.create(user);
  return res.status(status).json(data);
}