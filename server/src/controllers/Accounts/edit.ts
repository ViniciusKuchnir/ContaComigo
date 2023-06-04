import { Request, Response } from "express";
import { serverMessages } from "../../constants/Server";
import { prisma } from "../../database/prismaCliente";
import { MessageAccounts } from "../../constants/Accounts";
import { editAccountSchema } from "../../schemas/Account/edit";
import { z } from "zod";
import { formatDate } from "../../libs/Date";

type DataBillSchema = z.infer<typeof editAccountSchema>;

const edit = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {accountId} = req.params;
        const account: DataBillSchema = editAccountSchema.parse(req.body);
        try{
            await prisma.$transaction([
                prisma.bill.update({
                    where: {
                        id: Number.parseInt(accountId)
                      },
                      data: {
                        name: account.name,
                        beneficiary_name: account.beneficiary_name,
                        type_bill_id: account.type_bill_id,
                        amount: account.amount,
                        expiration: formatDate(account.expiration),
                        comments: account.comments,
                        status_id: account.status_id
                      },
                })
            ]);
            return res
            .status(MessageAccounts.edited.code)
            .send(MessageAccounts.edited.message);
        } catch (error) {
            return res
                .status(serverMessages.internalServerError.code)
                .send(serverMessages.internalServerError.message)
        }

    } catch (error) {
        console.log(error)
        return res
        .status(MessageAccounts.error.code)
        .send(MessageAccounts.error.message);        
    }
}

export default edit;