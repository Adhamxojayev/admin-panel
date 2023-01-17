import { Router } from 'express';
import controller from './controller.js';

const router = Router();

router.get('/products', controller.GET);
router.post('/products', controller.POST);
router.delete('/products/:productId', controller.DELETE);
router.put('/products/:productId', controller.PUT);


export default router;
