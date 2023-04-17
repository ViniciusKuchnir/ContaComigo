import { IServer } from "../../types/@types.messages";

const serverMessages: IServer = {
    internalServerError: {
        message: 'There was a problem on our part!',
        code: 500
    }
}

export {serverMessages}