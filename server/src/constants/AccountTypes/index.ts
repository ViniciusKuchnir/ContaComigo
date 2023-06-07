import { IMessages } from "../../types/@types.messages";


const MessagesAccountsType: IMessages = {
    created: {
        message: 'Account type created successfully',
        code: 201
    },
    edited: {
        message: 'Account type successfully edited',
        code: 200
    },
    deleted: {
        message: 'Account type deleted successfully',
        code: 200
    },
    found:{
        message: 'Account type found successfully',
        code: 200
    },
    error: {
        message: 'There was a account type error',
        code: 400
    },
    alreadyExist: {
         message: 'Account type already exist',
         code: 409
    },
    notFound: {
        message: 'Account type not found',
        code: 404
    }
}

export {MessagesAccountsType}