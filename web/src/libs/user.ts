import { User } from "../types/user";

export const getUser = (): User | null => {
    const sessionUser = localStorage.getItem('@AuthUser:user');
    if (sessionUser) {
        return JSON.parse(sessionUser);
    }

    return null;
    
}