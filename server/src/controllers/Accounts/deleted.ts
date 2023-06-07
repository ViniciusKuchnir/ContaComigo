import { Request, Response } from "express";
import { MessageAccounts } from "../../constants/Accounts";
import { serverMessages } from "../../constants/Server";
import { prisma } from "../../database/prismaCliente";


const deleted = async (req: Request, res:Response): Promise<Response> => {
    try {
        const {accountId} = req.params;
        try {
            await prisma.$transaction([
                prisma.bill.delete({where: {id: Number.parseInt(accountId)}}),     
            ])
            return res
            .status(MessageAccounts.deleted.code)
            .send(MessageAccounts.deleted.message);
        } catch (error) {
            return res
                .status(serverMessages.internalServerError.code)
                .send(serverMessages.internalServerError.message)
        }

    } catch (error) {
        return res
        .status(MessageAccounts.error.code)
        .send(MessageAccounts.error.message); 
    }
}

export default deleted;