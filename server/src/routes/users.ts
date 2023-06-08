import express from 'express';
import create from '../controllers/User/create';
import login from '../controllers/User/login';
import edit from '../controllers/User/edit';
import get from '../controllers/User/get';

const router = express.Router();

router.post('/users', create);
router.post('/login', login);
router.get('/users/:userId', get);
router.put('/users/:userId', edit);


export {router}