import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

import { IProduct, Product } from '../interface';

export async function getAll() {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute<RowDataPacket[]>(query);
  return products;
}

export async function create(product: IProduct) {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { ...product, id };
  return newProduct;
}