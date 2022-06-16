import { createSlice } from "@reduxjs/toolkit"

export enum Permission {
    "Nothing",
    "User",
    "Admin"
}

interface UserState {
    isLogged: boolean,
    accessToken: string,
    // permission: Permission,
    // id?: number,
    // name?: string,
    // email?: string,
    // apartment?: string
    
}

const initialState: UserState = {
    isLogged: false,
    accessToken: "",
    // permission: Permission.Nothing,
    // id:undefined,
}

const usersSlice = createSlice({
    name: "@user",
    initialState,
    reducers:{
        //SignIn
        signIn(state, action){
            Object.assign(state, {
                isLogged: true,
                accessToken: action.payload.accessToken,
                // permission: Permission[action.payload.permission],
                // id: action.payload.user.id,
                // name: action.payload.user.name,
                // email: action.payload.user.email,
                // apartment: action.payload.user.apartment,

            })
        },
        //SignOut
        signOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { signIn, signOut } = usersSlice.actions

export default usersSlice.reducer;

