import { Request, Response } from 'express';
import * as orderService from '../services/orderService';

export default async function getAll(_req: Request, res: Response) {
  const { status, data } = await orderService.default();
  return res.status(status).json(data);
}