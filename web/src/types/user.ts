export type User = {
    user: {
        id: number;
        name: string;
        surname: string;
        email: string;
        createdAt: string;
    },
    SignIn: (email:string, password:string) => void;
    signed: boolean;
}