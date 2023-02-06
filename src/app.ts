import express from 'express';
import * as productController from './controllers/productController';
import * as userController from './controllers/userController';

const app = express();

app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);
app.post('/users', userController.default);

export default app;
