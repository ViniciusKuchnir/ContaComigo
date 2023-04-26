import express from 'express';
import getAll from '../controllers/AccountTypes/getAll';

const router = express.Router();

router.get('/account-types', getAll);

export {router}