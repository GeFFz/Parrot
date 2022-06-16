import supertest from "supertest";
import app from "../../..";
import { UserController} from "./users.controller"
import { UserService } from "../services/UserService"
import { Users } from "../models/users";
import { body } from "express-validator";

describe('No controller, ao executar função', () => {

    describe('create', () => {
    

        test('deve retornar erro quando usuário não for criado', async () => {
            const response = await supertest(app)
            .post('/users')
            .send({
                
                "name": "supertest",
                "email": "supertest2@gmail.com",
                "password": "12345678",
                "apartment": "124",
                
            })
            expect(response.status).toBe(201)
        })
    })
    describe('getAll', () => {
    

        test('deve retornar erro quando usuário não for criado', async () => {
            const response = await supertest(app)
            .get('/users')
            .send({
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoic3VwZXJ0ZXN0NUBnbWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0IiwiYXBhcnRtZW50IjoxMjIsInBlcm1pc3Npb24iOjEsImlhdCI6MTY1NTQwMDQ4NH0.fnX2QRXq3mTjVletkVN6nHwy3TbFy0YhWuiuPcQIV4A')
            
            .expect(200);

        })
        
    })

})