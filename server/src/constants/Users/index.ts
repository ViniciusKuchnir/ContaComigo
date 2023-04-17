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
        code: 204
    },
    error: {
        message: 'User cannot be created',
        code: 400
    },
    alreadyExist: {
         message: 'User already exist',
         code: 409
    },
    notFound: {
        message: 'User not found',
        code: 404
    }
}

export {MessagesUser}