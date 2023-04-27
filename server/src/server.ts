import express from 'express';
import cors from 'cors';
import { router as routerUsers } from './routes/users';
import { router as routerAccountTypes } from './routes/accountTypes';
import { router as routerAccount } from './routes/accounts';


const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routerUsers);
app.use(routerAccountTypes);
app.use(routerAccount);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
