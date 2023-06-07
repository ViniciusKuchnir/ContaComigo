import { IMessages } from "../../types/@types.messages";

const MessageAccounts: IMessages = {
    created: {
        message: 'Account created successfully',
        code: 201
    },
    edited: {
        message: 'Account successfully edited',
        code: 200
    },
    deleted: {
        message: 'Account deleted successfully',
        code: 200
    },
    found:{
        message: 'Account found successfully',
        code: 200
    },
    error: {
        message: 'There was a account error',
        code: 400
    },
    alreadyExist: {
         message: 'Account already exist',
         code: 409
    },
    notFound: {
        message: 'Account not found',
        code: 404
    }
}

export {MessageAccounts}