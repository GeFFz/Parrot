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
    

        test('deve retornar erro quando não for encontrado nenhum usuário', async () => {
            const response = await supertest(app)
            .get('/users')
            .send({
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoic3VwZXJ0ZXN0NUBnbWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0IiwiYXBhcnRtZW50IjoxMjIsInBlcm1pc3Npb24iOjEsImlhdCI6MTY1NTQwNTU3Nn0.O6NZiS1sV5gNx1ARXqlrfMIilAGX42e-75qwf9n-Pbo')
            
            .expect(200);
        })      
    })
    describe('getOne', () => {
    

        test('deve retornar erro quando usuário não for encontrado', async () => {
            const response = await supertest(app)
            .get('/users/23')
            .send({ "id": "23",
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoic3VwZXJ0ZXN0NUBnbWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0IiwiYXBhcnRtZW50IjoxMjIsInBlcm1pc3Npb24iOjEsImlhdCI6MTY1NTQwNTU3Nn0.O6NZiS1sV5gNx1ARXqlrfMIilAGX42e-75qwf9n-Pbo')
            
            .expect(200);
        })      
    })
    describe('update', () => {
    

        test('deve retornar erro quando usuário não consiga alterar o usuário', async () => {
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
    

        test('deve retornar erro quando usuário não consiga deletar o usuário', async () => {
            const response = await supertest(app)
            .delete('/users/9')
            .send({ 

            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImVtYWlsIjoic3VwZXJ0ZXN0NUBnbWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0IiwiYXBhcnRtZW50IjoxMjIsInBlcm1pc3Npb24iOjEsImlhdCI6MTY1NTQwNTU3Nn0.O6NZiS1sV5gNx1ARXqlrfMIilAGX42e-75qwf9n-Pbo')
            
            .expect(204);
        })      
    })

})