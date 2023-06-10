import { Request, Response } from "express";
import { forgotPasswordUserSchema } from "../../schemas/User/forgotPassword";
import { z } from "zod";
import { MessagesUser } from "../../constants/Users";
import { prisma } from "../../database/prismaCliente";
import bcrypt from 'bcrypt';


type DataForgetPasswordSchema = z.infer<typeof forgotPasswordUserSchema>;


const resetPassword = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {email, password}: DataForgetPasswordSchema = forgotPasswordUserSchema.parse(req.body);


        const user = await prisma.user.findFirst({
            where:{
                email: email
            }
        });

        if (user === null) {
            return res
            .status(MessagesUser.notFound.code)
            .send(MessagesUser.notFound.message)
        }

        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(password, salt, async (error, hash) => {
                await prisma.$transaction([
                    prisma.user.update({
                        data: {
                            password: hash
                        },
                        where:{
                            email: email
                        }
                    })
                ])
            })
        });

        return res
        .status(MessagesUser.edited.code)
        .send(MessagesUser.edited.message);



    } catch (error) {
        return res
        .status(MessagesUser.error.code)
        .send(MessagesUser.error.message);
    }
}

export default resetPassword;