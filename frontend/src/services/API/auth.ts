
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


export const cadastroUsuario = async (user: SignIn) => {
    try {
        const response = await baseAPI.post("/cadastro", user)
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}

export const loginUsuario = async (signIn: SignIn) => {
    try {
        const response = await baseAPI.post("/login", signIn)
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}