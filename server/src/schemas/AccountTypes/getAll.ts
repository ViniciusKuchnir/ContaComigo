import {z} from 'zod';

const getAllSchema = z.object({
    id: z.number().positive(),
    type: z.string().max(30, 'The type must contain a maximum of 30 characters'),
    createdAt: z.date()
});

export {getAllSchema}