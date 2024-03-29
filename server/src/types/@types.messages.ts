interface IMessages {
    created: {
        message: string;
        code: 201
    };
    error: {
        message: string;
        code: 400 
    };
    found:{
        message: string;
        code: 200
    };
    edited: {
        message: string;
        code: 200
    };
    deleted: {
        message: string;
        code: 200
    };
    alreadyExist: {
        message: string;
        code: 409
    };
    notFound: {
        message: string;
        code: 404;
    };
}

interface IServer{
    internalServerError: {
        message: string;
        code: 500
    }
}

interface IEmail {
    error: {
        message: string;
        code: 400
    },
    success: {
        message: string;
        code: 200
    }
}

export {IMessages, IServer, IEmail};