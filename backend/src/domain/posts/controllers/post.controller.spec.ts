import supertest from "supertest";
import app from "../../..";
import { PostController } from "./post.controller"



describe('No controller, ao executar a função', () => {

    


    describe('create', () => {
       

        test('caso sucesso é do tipo function.', () => {
            expect(typeof PostController.create).toBe('function')
        });

        test('em caso de sucesso, deve retornar 200.', async () => {
            const response = await supertest(app)
            .post('/posts')
            .send({
                content: "Testando"
            })
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImVtYWlsIjoic3VwZXJ0ZXN0MTExQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QxMTEiLCJhcGFydG1lbnQiOjEyMiwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDExMDQ0fQ.QrSIJTwnRP2eWI2RAZD7k1u9EB2hfpzMmLrnKgEvaf8')
            expect(response.status).toBe(201);
        })
        
    })

    describe('getAll', () => {
    

        test('deve retornar erro quando não for encontrado nenhum post', async () => {
            const response = await supertest(app)
            .get('/posts')
          
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImVtYWlsIjoic3VwZXJ0ZXN0MTExQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QxMTEiLCJhcGFydG1lbnQiOjEyMiwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDExMDQ0fQ.QrSIJTwnRP2eWI2RAZD7k1u9EB2hfpzMmLrnKgEvaf8')
            
            .expect(200);
        })      
    })
    describe('getOne', () => {
    
        
        test('deve retornar erro quando post não for encontrado', async () => {
            const response = await supertest(app)
            .get('/posts/42')
            
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImVtYWlsIjoic3VwZXJ0ZXN0MTExQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QxMTEiLCJhcGFydG1lbnQiOjEyMiwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDExMDQ0fQ.QrSIJTwnRP2eWI2RAZD7k1u9EB2hfpzMmLrnKgEvaf8')
            
            .expect(200);
        })      
    })


 
            describe('getUserPost', () => {
    
            
            test('deve retornar erro quando usuário logado não possuir posts com esse id', async () => {
                const response = await supertest(app)
                .get('/posts/user/61')
                
                
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImVtYWlsIjoic3VwZXJ0ZXN0MTExQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QxMTEiLCJhcGFydG1lbnQiOjEyMiwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDExMDQ0fQ.QrSIJTwnRP2eWI2RAZD7k1u9EB2hfpzMmLrnKgEvaf8')
                
                .expect(200);
            })      
        })

    describe('update', () => {
    

        test('deve retornar erro quando usuário não consiga alterar o post', async () => {
            const response = await supertest(app)
            .put('/posts/45')
            .send({
                "content": "Maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImVtYWlsIjoic3VwZXJ0ZXN0MTExQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QxMTEiLCJhcGFydG1lbnQiOjEyMiwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDExMDQ0fQ.QrSIJTwnRP2eWI2RAZD7k1u9EB2hfpzMmLrnKgEvaf8')
                
            .expect(200);
        })  
        
        test('erro esperado quando usuário quer alterar um post que não é seu', async () => {
            const response = await supertest(app)
            .put('/posts/1')
            .send({
                "content": "Maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImVtYWlsIjoiaGFubmFAaG90bWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0IiwiYXBhcnRtZW50IjoxMjQsInBlcm1pc3Npb24iOjEsImlhdCI6MTY1NTQyNDI3NH0.kSZ7-bWqyOVvt6ejMjWqFGqiHKpqBth6XBatvt3zCRA')
                
            .expect(400);
        })      
        
    })
    describe('destroy', () => {
    

        test('deve retornar erro quando usuário não consiga deletar o post', async () => {
            const response = await supertest(app)
            .delete('/posts/47')

            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImVtYWlsIjoic3VwZXJ0ZXN0MTExQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QxMTEiLCJhcGFydG1lbnQiOjEyMiwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDExMDQ0fQ.QrSIJTwnRP2eWI2RAZD7k1u9EB2hfpzMmLrnKgEvaf8')
                
            
            .expect(204);
        })      
    })

})