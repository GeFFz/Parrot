import supertest from "supertest";
import app from "../../..";
import { UserController} from "./users.controller"
import { UserService } from "../services/UserService"
import { Users } from "../models/users";
import { body } from "express-validator";


describe('No controller, ao executar função', () => {


    describe('create', () => {
    

        test('sucesso quando usuário for criado', async () => {
            const response = await supertest(app)
            .post('/users')
            .send({
                
                "name": "supertest",
                "email": "supertest03@gmail.com",
                "password": "12345678",
                "apartment": "124",
                
            })
            expect(response.status).toBe(201)
        })
    })
    describe('getAll', () => {
    

        test('sucesso  quando listar todos os usuários', async () => {
            const response = await supertest(app)
            .get('/users')
            .send({
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoic3VwZXJ0ZXN0NUBnbWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0IiwiYXBhcnRtZW50IjoxMjIsInBlcm1pc3Npb24iOjEsImlhdCI6MTY1NTQwNTU3Nn0.O6NZiS1sV5gNx1ARXqlrfMIilAGX42e-75qwf9n-Pbo')
            
            .expect(200);
        })      
    })
    describe('getOne', () => {
    

        test('sucesso quando usuário específico for encontrado', async () => {
            const response = await supertest(app)
            .get('/users/23')
            .send({ "id": "23",
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoic3VwZXJ0ZXN0NUBnbWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0IiwiYXBhcnRtZW50IjoxMjIsInBlcm1pc3Npb24iOjEsImlhdCI6MTY1NTQwNTU3Nn0.O6NZiS1sV5gNx1ARXqlrfMIilAGX42e-75qwf9n-Pbo')
            
            .expect(200);
        })      
    })
    describe('update', () => {
    

        test('sucesso quando usuário consegue alterar suas informações', async () => {
            const response = await supertest(app)
            .put('/users/23')
            .send({ 
                "name": "supertest",
                "email": "supertest10@gmail.com",
                "password": "12345678",
                "apartment": "124",
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoic3VwZXJ0ZXN0NUBnbWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0IiwiYXBhcnRtZW50IjoxMjIsInBlcm1pc3Npb24iOjEsImlhdCI6MTY1NTQwNTU3Nn0.O6NZiS1sV5gNx1ARXqlrfMIilAGX42e-75qwf9n-Pbo')
            
            .expect(200);
        })      
    })
    describe('destroy', () => {
    

        test('sucesso quando usuário é deletado', async () => {
            const response = await supertest(app)
            .delete('/users/10')
            .send({ 

            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoic3VwZXJ0ZXN0NUBnbWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0IiwiYXBhcnRtZW50IjoxMjIsInBlcm1pc3Npb24iOjEsImlhdCI6MTY1NTQwNTU3Nn0.O6NZiS1sV5gNx1ARXqlrfMIilAGX42e-75qwf9n-Pbo')
            
            .expect(204);
        })      
    })
    describe('login', () => {
    

        test('sucesso caso usuário informe email e senha corretos', async () => {
            const response = await supertest(app)
            .post('/login')
            .send({ 
                "email": "hanna@hotmail.com",
                "password": "12345678"
            })
            
            .expect(200);
        })      
    })
})
