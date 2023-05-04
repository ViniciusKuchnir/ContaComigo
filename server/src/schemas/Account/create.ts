import { z } from "zod";

const createAccountSchema = z.object({
    user_id: z.number().positive(),
    status_id: z.number().positive(),
    type_bill_id: z.number().positive(),
    name: z.string()
    .nonempty('Account name required')
    .max(35, 'Account name must contain a maximum of 35 characters'),
    beneficiary_name: z.string()
    .nonempty('Beneficiary name required')
    .max(100, 'Beneficiary name must contain a maximum of 100 characters'),
    expiration: z.string().nullable(),
    amount: z.number().positive(),
    comments: z.string()
    .max(255, 'Comments must contain a maximum of 255 characters')
    .nullable()
});

export {createAccountSchema}