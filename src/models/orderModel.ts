import { RowDataPacket } from 'mysql2';
import connection from './connection';

export default async function getAll() {
  const query = `SELECT orders.id, user_id as userId,
  JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders INNER JOIN Trybesmith.products
  ON products.order_id = orders.id 
  GROUP BY orders.id;`;
  const [data] = await connection.execute<RowDataPacket[]>(query);
  return data;
}
