import * as orderModel from '../models/orderModel';

export default async function getAll() {
  const data = await orderModel.default();
  return { status: 200, data };
}