import jwt from 'jsonwebtoken';
import * as userModel from '../models/userModel';

import { IUser } from '../interface';

const secret = 'umaSenhaSecreta';
const config: object = {
  expiresIn: '6h',
  algorithm: 'HS256',
};

export function getAll() {
  console.log('rest');
}

export async function create(user: IUser) {
  const payload = await userModel.create(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };
  return { status: 201, data };
}