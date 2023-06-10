import React, { useState } from 'react';
import * as C from './styles';
import FormEmail from './FormEmail';
import FormCode from './FormCode';
import FormPassword from './FormPassword';



const ForgotPassword = () => {

    const [sentEmail, setSentEmail] = useState<boolean>(false);
    const [sentCode, setSentCode] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    const handleSentEmail = () => {
        setSentEmail(true);
    }

    const handleSentCode = () => {
        setSentCode(true);
    }

    const renderForms = () => {
        if (!sentEmail) {
            return <FormEmail handleSentEmail={handleSentEmail} setEmail={setEmail} />
        }else{
            if (!sentCode) {
               return <FormCode handleSentCode={handleSentCode} />
            }else{
               return <FormPassword userEmail={email} />
            }
        }
    }

  return (
    <C.Container>
        <C.Box>
            <div>
                <C.Title>Forgot Password?</C.Title>
                <C.Subtitle>No worries, we'll send you reset instructions.</C.Subtitle>
            </div>
            {renderForms()}
        </C.Box>
    </C.Container>
  )
}

export default ForgotPassword