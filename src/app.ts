import express from 'express';
import * as productController from './controllers/productController';
import * as userController from './controllers/userController';
import * as orderController from './controllers/orderController';

const app = express();

app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);
app.post('/users', userController.default);
app.get('/orders', orderController.default);
export default app;
