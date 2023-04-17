import {z} from 'zod';

const createUserSchema = z.object({
    name: z.string()
      .min(2, 'The confirmation password must contain at least 2 characters')
      .nonempty('Name is required')
      .transform(name => { //Capitalize
        return name.trim().split(' ').map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
      }),
    surname: z
      .string()
      .min(2, 'The confirmation password must contain at least 2 characters')
      .nonempty('Surname is required')
      .transform(name => { //Capitalize
        return name.trim().split(' ').map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
      }),
    email: z.string().email('Invalid email').nonempty('Email is required'),
    password: z.string()
      .nonempty('Password is required')
      .min(8, 'The password must contain at least 8 characters')
});

export {createUserSchema}