import express from 'express';
import create from '../controllers/User/create';

const router = express.Router();

router.post('/users', create);


export {router}