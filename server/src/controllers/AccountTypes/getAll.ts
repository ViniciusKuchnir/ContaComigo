import { Request, Response } from "express";
import { prisma } from "../../database/prismaCliente";
import { MessagesAccountsType } from '../../constants/AccountTypes'
import { getAllSchema } from "../../schemas/AccountTypes/getAll";
import { z } from "zod";

type DataAccountTypeSchema = z.infer<typeof getAllSchema>;


const getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
        const accountTypes: DataAccountTypeSchema[] = await prisma.type_Bill.findMany();
        return res
        .status(MessagesAccountsType.found.code)
        .send(accountTypes);
    } catch (error) {
        return res
        .status(MessagesAccountsType.error.code)
        .send(MessagesAccountsType.error.message)
    }
}

export default getAll;