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

export interface UserState {
    isLogged: boolean,
    accessToken: string,
    permission?: Permission,
    id?: number,
    name?: string,
    email?: string,
    apartment?: number
}

export interface Post {
    id?: number,
    user_name?: string,
    user_email?: string,
    user_apartment?: number,
    content: string,
    user_id?: number
}



export interface PostState {
    post: Post []
}