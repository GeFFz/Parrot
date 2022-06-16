
import baseAPI from "./api_parrot"


export interface SignIn {
    email: string,
    password: string
}

export interface User extends SignIn {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    apartment: number,
    permission?: Permission
}

export enum Permission {
    "Nothing",
    "User",
    "Admin"
}


export const cadastroUsuario = async (user: Omit<User, "id">) => {
    try {
        const response = await baseAPI.post("/users", user)
        console.log(response.data);        
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}

export const loginUsuario = async (signIn: SignIn) => {
    try {
        const response = await baseAPI.post("/login", signIn)
        console.log(response.data);  
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}