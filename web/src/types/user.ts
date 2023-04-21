export type User = {
    id: number;
    name: string;
    surname: string;
    email: string;
    createdAt: string;
}

export type ContextUser = {
    user: User,
    SignIn: (email:string, password:string) => void;
    signed: boolean;
}