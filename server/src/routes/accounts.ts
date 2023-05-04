import express from 'express';
import create from '../controllers/Accounts/create';
import get from '../controllers/Accounts/get';

const router = express.Router();

router.post('/accounts', create);
router.get('/accounts/:userId', get);

export {router}