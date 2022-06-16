import supertest from "supertest";
import app from "../../../";

describe('No controller, ao executar função', () => {

    describe('create', () => {
        // const emailTest = "5512" ;

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/posts')
            .send({
                content: "AHUSuhAHUS"
            })
    
            expect(response.status).toBe(201)
        })

        


    })
})