import { Request, Response } from "express";
import { z } from 'zod';
import { loginUserSchema } from "../../schemas/User/login";
import { MessagesUser } from "../../constants/Users";
import { serverMessages } from "../../constants/Server";
import { prisma } from "../../database/prismaCliente";
import bcrypt from 'bcrypt';

type DataUserSchema = z.infer<typeof loginUserSchema>

const login = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {email, password}: DataUserSchema = loginUserSchema.parse(req.body);
        let isAuthenticated: boolean = false;
         
        try {
            const user = await prisma.user.findFirst({
                where: {email}
            });

            if (user === null) {
                return res
                .status(MessagesUser.notFound.code)
                .send(MessagesUser.notFound.message)
            }

           await bcrypt.compare(password, user.password)
           .then((result) => {
                isAuthenticated = result;
            });

            if (isAuthenticated) {
                return res
                .status(MessagesUser.found.code)
                .send({
                    id: user.id,
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    createdAt: user.createdAt
                });
            }

            return res
            .status(MessagesUser.notFound.code)
            .send(MessagesUser.notFound.message);
            
        } catch (error) {
            return res
            .status(serverMessages.internalServerError.code)
            .send(serverMessages.internalServerError.message);
        }
    } catch (error) {
       return res
        .status(MessagesUser.error.code)
        .send(MessagesUser.error.message);
    }
}

export default login;
