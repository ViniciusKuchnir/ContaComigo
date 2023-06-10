import express from 'express';
import sendEmailForgotPassword from '../controllers/Emails/forgotPassword';


const router = express.Router();

router.post('/sendEmailForgotPassword', sendEmailForgotPassword);



export {router}