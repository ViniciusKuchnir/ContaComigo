import express from 'express';
import create from '../controllers/Accounts/create';
import get from '../controllers/Accounts/get';
import edit from '../controllers/Accounts/edit';

const router = express.Router();

router.post('/accounts', create);
router.get('/accounts/:userId/:statusId/:accountId?', get);
router.patch('/accounts/:accountId', edit);

export {router}