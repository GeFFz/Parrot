import supertest from "supertest";
import app from "../../..";
import { PostController } from "./post.controller"


describe('No controller, ao executar a função', () => {

    // const reqGeneric = {
    //     body: {
    //         "content": "EU NAO AGUENTO MAIS ESSE BARULHO"
    //     },
    //     auth: {
    //         id: 24,
    //         email: 'pinsta@gmail.com',
    //         name: 'Postador do Intagram',
    //         apartment: 302,
    //         permission: 1

    //     }
    // };
    // const expectedRes = {
    //     "id": 43,
    //     "content": "O inquilino do 202 faz muito barulho de madrugada!!!",
    //     "user_id": 24,
    //     "updatedAt": "2022-06-16T16:59:08.794Z",
    //     "createdAt": "2022-06-16T16:59:08.794Z"
    // }



    describe('create', () => {
        // const emailTest = "5512" ;

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
})