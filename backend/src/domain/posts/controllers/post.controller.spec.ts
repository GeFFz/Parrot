import supertest from "supertest";
import app from "../../..";
import { PostController } from "./post.controller"



describe('No controller, ao executar a função', () => {

    


    describe('create', () => {
       

        test('caso sucesso é do tipo function.', () => {
            expect(typeof PostController.create).toBe('function')
        });

        test('em caso de sucesso, deve retornar 401.', async () => {
            const response = await supertest(app)
            .post('/posts')
            .send({
                content: "Testando"
            })
    
            expect(response.status).toBe(401);
        })
        
    })

    describe('getAll', () => {
    

        test('deve retornar erro quando não for encontrado nenhum post', async () => {
            const response = await supertest(app)
            .get('/posts')
            .send({
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImVtYWlsIjoic3VwZXJ0ZXN0MzEwQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDIxMDg3fQ.8z2xbimq2zT-8BsOqFRKQgjLnorE5jXJXD-ydSg6y-o')
            
            .expect(200);
        })      
    })
    describe('getOne', () => {
    
        
        test('deve retornar erro quando post não for encontrado', async () => {
            const response = await supertest(app)
            .get('/post/41')
            
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImVtYWlsIjoic3VwZXJ0ZXN0MzEwQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDIxMDg3fQ.8z2xbimq2zT-8BsOqFRKQgjLnorE5jXJXD-ydSg6y-o'
            )
            
            .expect(200);
        })      
    })


 
            describe('getUserPost', () => {
    
            
            test('deve retornar erro quando usuário logado não possuir posts com esse id', async () => {
                const response = await supertest(app)
                .get('posts/user/24')
                
                
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImVtYWlsIjoic3VwZXJ0ZXN0MzEwQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDIxMDg3fQ.8z2xbimq2zT-8BsOqFRKQgjLnorE5jXJXD-ydSg6y-o')
                
                .expect(200);
            })      
        })

    describe('update', () => {
    

        test('deve retornar erro quando usuário não consiga alterar o post', async () => {
            const response = await supertest(app)
            .put('/posts/41')
            .send({
                "content": "MUAHAHAA2",
                "user_id": "6"
            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImVtYWlsIjoic3VwZXJ0ZXN0MzEwQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDIxMDg3fQ.8z2xbimq2zT-8BsOqFRKQgjLnorE5jXJXD-ydSg6y-o')
                
            .expect(200);
        })      
    })
    describe('destroy', () => {
    

        test('deve retornar erro quando usuário não consiga deletar o post', async () => {
            const response = await supertest(app)
            .delete('/posts/41')
            .send({ 

            })
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImVtYWlsIjoic3VwZXJ0ZXN0MzEwQGdtYWlsLmNvbSIsIm5hbWUiOiJzdXBlcnRlc3QiLCJhcGFydG1lbnQiOjEyNCwicGVybWlzc2lvbiI6MSwiaWF0IjoxNjU1NDIxMDg3fQ.8z2xbimq2zT-8BsOqFRKQgjLnorE5jXJXD-ydSg6y-o')
                
            
            .expect(204);
        })      
    })

})