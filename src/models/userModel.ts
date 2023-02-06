import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { User, IUser } from '../interface';

export function getAll() {
  console.log('test');
}

export async function create(user: IUser) {
  const { username, vocation, level, password } = user;
  const table = 'Trybesmith.users';
  const query = `INSERT INTO ${table} (username, vocation, level, password)VALUES (?,?,?,?)`;
  const values = [username, vocation, level, password];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newUser: User = { ...user, id };
  return newUser;
}