import express from 'express';
import create from '../controllers/User/create';
import login from '../controllers/User/login';

const router = express.Router();

router.post('/users', create);
router.post('/login', login);


export {router}