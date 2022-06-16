import baseAPI from "./api_parrot"

interface CadastroUsuarioPayload{
    name: string;
    email: string;
    password: string;
    apartment: number;
}


export function cadastroUsuario(payload : CadastroUsuarioPayload){
    return baseAPI.post("/users", payload)
}

