import { Request, Response } from "express"
import { serverMessages } from "../../constants/Server";
import { MessageAccounts } from "../../constants/Accounts";
import { prisma } from "../../database/prismaCliente";
import { z } from "zod";


const get = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {userId, statusId, accountId} = req.params;
        try {
           const accounts = await prisma.bill.findMany({
                include:{
                    type_bill: true
                },
                where: {
                    id: accountId === undefined ? {} : Number.parseInt(accountId),
                    status_id: Number.parseInt(statusId),
                    user_id: Number.parseInt(userId)
                    
                }
            });

            return res
            .status(MessageAccounts.found.code)
            .send(accounts);

        } catch (error) {
            return res
            .status(serverMessages.internalServerError.code)
            .send(serverMessages.internalServerError.message);
        }
    } catch (error) {
        return res
        .status(serverMessages.internalServerError.code)
        .send(serverMessages.internalServerError.message)
    }
}

export default get;