import { Request, Response } from "express";
import { createAccountSchema } from "../../schemas/Account/create";
import { z } from "zod";
import { prisma } from "../../database/prismaCliente";
import { MessageAccounts } from "../../constants/Accounts";
import { serverMessages } from "../../constants/Server";
import { formatDate } from "../../libs/Date";


type DataBillSchema = z.infer<typeof createAccountSchema>;

const create = async (req: Request, res: Response): Promise<Response> => {
    try {
        const bill: DataBillSchema = createAccountSchema.parse(req.body);
        try {
            await prisma.$transaction([
             prisma.bill.create({
                 data:{
                     user_id: bill.user_id,
                     status_id: bill.status_id,
                     type_bill_id: bill.type_bill_id,
                     name: bill.name,
                     beneficiary_name: bill.beneficiary_name,
                     expiration: formatDate(bill.expiration),
                     amount: bill.amount,
                     comments: bill.comments
                 }
             })
            ]);

           return res
           .status(MessageAccounts.created.code)
           .send(MessageAccounts.created.message);

        } catch (error) {
            console.log(error);
            return res
            .status(serverMessages.internalServerError.code)
            .send(serverMessages.internalServerError.message);
        }
    } catch (error) {
        console.log(error);
        return res
        .status(MessageAccounts.error.code)
        .send(MessageAccounts.error.message);
    }
}

export default create;