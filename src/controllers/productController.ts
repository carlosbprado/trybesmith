import { Request, Response } from 'express';

import { IProduct } from '../interface';
import * as productService from '../services/productService';

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await productService.getAll();
  return res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const product = req.body as IProduct;
  const { status, data } = await productService.create(product);
  res.status(status).json(data);
}