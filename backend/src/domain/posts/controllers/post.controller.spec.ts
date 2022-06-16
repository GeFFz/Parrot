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
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImVtYWlsIjoiaGFubmFAaG90bWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0aGFubmEiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDI4NjM1fQ.wOhNKuco5WQwlwcH81lAG-TZImdQCm-kDsM07uEViZY')
            expect(response.status).toBe(201);
        })
        
    })

    describe('getAll', () => {
    

        test('sucesso caso existam posts', async () => {
            const response = await supertest(app)
            .get('/posts')
          
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImVtYWlsIjoiaGFubmFAaG90bWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0aGFubmEiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDI4NjM1fQ.wOhNKuco5WQwlwcH81lAG-TZImdQCm-kDsM07uEViZY')
            
            .expect(200);
        })      
    })
    describe('getOne', () => {
    
        
        test('sucesso quando id do post não exixtir', async () => {
            const response = await supertest(app)
            .get('/posts/56')
            
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImVtYWlsIjoiaGFubmFAaG90bWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0aGFubmEiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDI4NjM1fQ.wOhNKuco5WQwlwcH81lAG-TZImdQCm-kDsM07uEViZY')
            
            .expect(200);
        })      
    })


 
            describe('getUserPost', () => {
    
            
            test('sucesso quando usuário logado conseguir os próprios posts', async () => {
                const response = await supertest(app)
                .get('/posts/user/37')
                
                
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImVtYWlsIjoiaGFubmFAaG90bWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0aGFubmEiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDI4NjM1fQ.wOhNKuco5WQwlwcH81lAG-TZImdQCm-kDsM07uEViZY')
                
                .expect(200);
            })      
        })

    describe('update', () => {
    

        test('sucesso caso usuário consiga alterar seu post', async () => {
            const response = await supertest(app)
            .put('/posts/57')
            .send({
                "content": "Maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImVtYWlsIjoiaGFubmFAaG90bWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0aGFubmEiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDI4NjM1fQ.wOhNKuco5WQwlwcH81lAG-TZImdQCm-kDsM07uEViZY')
                
            .expect(200);
        })  
        
        test('erro esperado quando usuário quer alterar um post que não é seu', async () => {
            const response = await supertest(app)
            .put('/posts/1')
            .send({
                "content": "Maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImVtYWlsIjoiaGFubmFAaG90bWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0aGFubmEiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDI4NjM1fQ.wOhNKuco5WQwlwcH81lAG-TZImdQCm-kDsM07uEViZY')
                
            .expect(400);
        })      
        
    })
    describe('destroy', () => {
    

        test('status 204 quando post é deletado com sucesso', async () => {
            const response = await supertest(app)
            .delete('/posts/65')

            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzcsImVtYWlsIjoiaGFubmFAaG90bWFpbC5jb20iLCJuYW1lIjoic3VwZXJ0ZXN0aGFubmEiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDI4NjM1fQ.wOhNKuco5WQwlwcH81lAG-TZImdQCm-kDsM07uEViZY')
                
            
            .expect(204);
        })      
    })

})