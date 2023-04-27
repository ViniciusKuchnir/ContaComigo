import express from 'express';
import create from '../controllers/Accounts/create';
const router = express.Router();

router.post('/accounts', create);

export {router}