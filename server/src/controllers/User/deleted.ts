import { Request, Response } from "express"
import { MessagesUser } from "../../constants/Users"
import { serverMessages } from "../../constants/Server";
import { prisma } from "../../database/prismaCliente";


const deleted = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {userId} = req.params;
        try {

            await prisma.$transaction([
                prisma.user.delete({where: {id: Number.parseInt(userId)}})
            ]);

            return res
                .status(MessagesUser.deleted.code)
                .send(MessagesUser.deleted.message);
            
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

export default deleted;