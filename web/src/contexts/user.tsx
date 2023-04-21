import { createContext, useEffect, useState } from "react";
import { ContextUser } from "../types/user";
import { api } from "../services/api";
import { toast } from "react-toastify";

type Props = {
    children: React.ReactNode
}

export const UserContext = createContext<ContextUser | {}>({});

export const UserProvider = ({children}: Props) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const loadStoreAuth = async () => {
            const sessionUser = localStorage.getItem('@AuthUser:user');
            if (sessionUser) {
                setUser(sessionUser);
            }
        };
        loadStoreAuth();
    }, []);

    const SignIn = (email: string, password: string) => {
        api.post('/login', {
            email: email,
            password: password
        })
        .then(({data}) => {
            setUser(data);
            localStorage.setItem('@AuthUser:user', JSON.stringify(data));
        })
        .catch(({response}) => {
            toast.error(response.data);
        });

    }  

    return (
        <UserContext.Provider value={{user, signed: !!user, SignIn}}>
            {children}
        </UserContext.Provider>
    )

}