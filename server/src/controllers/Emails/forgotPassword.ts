const nodemailer = require('nodemailer');
import { Request ,Response } from "express";
import { z } from "zod";
import { MessagesEmail } from "../../constants/Emails";
import transporter from "../../services/email/smtp";
import { generateTextHTML } from "./HTMLS/ForgotPassword";


const emailForgotPasswordSchema = z.object({
    email: z.string().email('Invalid email').nonempty('Email is required'),
    code: z.string()
    .min(6, 'The code must have at least 6 characters')
    .max(6, 'The code must have a maximum of 6 characters')
});

type EmailForgotPasswordSchema = z.infer<typeof emailForgotPasswordSchema>;

const sendEmailForgotPassword = async (req: Request, res: Response) => {
    try {
        const {email, code}: EmailForgotPasswordSchema = emailForgotPasswordSchema.parse(req.body); 


        const options = {
            from : process.env.EMAIL_USER, 
            to: email, 
            subject: "Reset password", 
            html: generateTextHTML(code)
        }

        await transporter.sendMail(options, (error:Object, info:Object) =>{
            if (error) {
                return res
                .status(MessagesEmail.error.code)
                    .send(MessagesEmail.error.message);
                
            }    
        })
        
        return res
        .status(MessagesEmail.success.code)
            .send(MessagesEmail.success.message);
         

    } catch (error) {
        return res
            .status(MessagesEmail.error.code)
            .send(MessagesEmail.error.message);
    }
}

export default sendEmailForgotPassword;