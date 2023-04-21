import { z } from "zod";

const loginUserSchema = z.object({
    email: z.string().email('Invalid email').nonempty('Email is required'),
    password: z.string()
      .nonempty('Password is required')
      .min(8, 'The password must contain at least 8 characters')
});

export {loginUserSchema}