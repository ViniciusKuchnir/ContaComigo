import { IEmail } from "../../types/@types.messages"

const MessagesEmail: IEmail = {
    error: {
        message: 'There was an error sending email',
        code: 400
    }, 
    success: {
        message: 'Email successfully sent',
        code: 200
    }
}

export {MessagesEmail}