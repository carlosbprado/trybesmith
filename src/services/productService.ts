import { IProduct } from '../interface';
import * as productModel from '../models/productModel';

export async function getAll() {
  const data = await productModel.getAll();
  return { status: 200, data };
}

export async function create(product: IProduct) {
  const data = await productModel.create(product);
  return { status: 201, data };
}