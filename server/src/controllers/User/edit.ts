import { Request, Response } from "express";
import { MessagesUser } from "../../constants/Users";
import { z } from "zod";
import { loginUserSchema } from "../../schemas/User/login";
import { createUserSchema } from "../../schemas/User/create";
import { serverMessages } from "../../constants/Server";
import { prisma } from "../../database/prismaCliente";
import bcrypt from 'bcrypt';

type DataUserSchema = z.infer<typeof createUserSchema>;

const edit = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userId } = req.params;
        const {name, surname, email, password}: DataUserSchema = createUserSchema.parse(req.body); 
        
        try {
          
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(password, salt, async (error, hash) => {
                    await prisma.$transaction([
                        prisma.user.update({
                            data:{
                                name,
                                surname,
                                email,
                                password: hash,
    
                            },
                            where:{
                                id: Number.parseInt(userId)
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
            .status(serverMessages.internalServerError.code)
            .send(serverMessages.internalServerError.message);    
        }

    } catch (error) {
        return res
            .status(MessagesUser.error.code)
            .send(MessagesUser.error.message);
    }
}

export default edit;