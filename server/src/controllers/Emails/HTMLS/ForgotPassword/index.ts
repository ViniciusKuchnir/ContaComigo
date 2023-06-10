export const generateTextHTML = (code: string): string => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      /* Estilos CSS para o email */
      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
      }
      
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
      }
      
      .title {
        text-align: center;
        color: #6e00ff;
        font-size: 24px;
        margin-top: 0;
      }
      
      .message {
        padding: 20px;
        background-color: #ffffff;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 2px solid #6e00ff;
      }
      
      .message p {
        margin: 0;
      }
      
      .code {
        padding: 20px;
        background-color: #6e00ff;
        color: #ffffff;
        margin-bottom: 20px;
        border-radius: 5px;
      }
      
      .code p {
        margin: 0;
        font-size: 18px;
        text-align: center;
      }

      .code #code {
        font-size: 36px;
      }
      
      .footer {
        text-align: center;
        color: #777777;
        font-size: 14px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1 class="title">Redefinição de senha - ContaComigo</h1>
      <div class="message">
        <p>Olá,</p>
        <p>Recebemos uma solicitação para redefinir a senha da sua conta na plataforma ContaComigo. Utilize o código abaixo para completar o processo de redefinição:</p>
      </div>
      <div class="code">
        <p><strong>Código de verificação:</strong></p>
        <p id="code"><strong>${code}</strong></p>
      </div>
      <p class="footer">Se você não solicitou essa redefinição, por favor, entre em contato conosco imediatamente pelo email ${process.env.EMAIL_USER}</p>
      <p class="footer">Obrigado,<br>A equipe da plataforma ContaComigo</p>
    </div>
  </body>
  </html>
  
  `
}