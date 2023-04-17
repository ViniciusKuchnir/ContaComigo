import { Request, Response } from "express"
import { z } from 'zod';
import { createUserSchema } from "../../schemas/User/create";
import { MessagesUser } from "../../constants/Users";
import { serverMessages } from '../../constants/Server';
import { prisma } from "../../database/prismaCliente";
import bcrypt from 'bcrypt';

type DataUserSchema = z.infer<typeof createUserSchema>;

const create = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {name, surname, email, password}: DataUserSchema = createUserSchema.parse(req.body); 
        
        
        try {

            const user = await prisma.user.findFirst({
                where:{
                    email
                }
            });

            if (user !== null) {
                return res
                .status(MessagesUser.alreadyExist.code)
                .send(MessagesUser.alreadyExist.message)
            }

            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(password, salt, async (error, hash) => {
                    await prisma.$transaction([
                        prisma.user.create({
                            data:{
                                name,
                                surname,
                                email,
                                password: hash,
    
                            }
                        })
                    ])
                })
            });
            return res
            .status(MessagesUser.created.code)
            .send(MessagesUser.created.message);
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

export default create;