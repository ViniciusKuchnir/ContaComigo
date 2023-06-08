import { Request, Response } from "express";
import { MessagesUser } from "../../constants/Users";
import { z } from "zod";
import { serverMessages } from "../../constants/Server";
import { prisma } from "../../database/prismaCliente";


const get = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userId } = req.params;
        try {
          
            const user = await prisma.user.findFirst({
                where: {
                    id: Number.parseInt(userId)
                }
            });

            if (user === null) {
                return res
                    .status(MessagesUser.notFound.code)
                    .send(MessagesUser.notFound.message);
            }
            
            
            return res
            .status(MessagesUser.found.code)
            .send(user);
            
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

export default get;