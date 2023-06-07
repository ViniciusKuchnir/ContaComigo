import { IMessages } from '../../types/@types.messages';

const MessagesUser: IMessages = {
    created: {
        message: 'User created successfully',
        code: 201
    },
    edited: {
        message: 'User successfully edited',
        code: 200
    },
    deleted: {
        message: 'User deleted successfully',
        code: 200
    },
    found:{
        message: 'User found successfully',
        code: 200
    },
    error: {
        message: 'There was a user error',
        code: 400
    },
    alreadyExist: {
         message: 'User already exist',
         code: 409
    },
    notFound: {
        message: 'Incorrect username or password',
        code: 404
    }
}

export {MessagesUser}