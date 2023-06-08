import express from 'express';
import create from '../controllers/User/create';
import login from '../controllers/User/login';
import edit from '../controllers/User/edit';
import get from '../controllers/User/get';
import deleted from '../controllers/User/deleted';

const router = express.Router();

router.post('/users', create);
router.post('/login', login);
router.get('/users/:userId', get);
router.put('/users/:userId', edit);
router.delete('/users/:userId', deleted);


export {router}