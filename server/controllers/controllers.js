import authController from './auth';
import orderController from './order';
import productController from './product';

export default function(app) {
  [
    authController,
    orderController,
    productController,
  ].forEach(function(controller) {
    controller(app);
  });
};
