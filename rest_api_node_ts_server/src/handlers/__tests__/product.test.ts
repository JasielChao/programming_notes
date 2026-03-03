import request from "supertest";
import server from "../../server";


describe('Test POST /api/products', () => {
    test('It should create a new product', async () => {
        const response = await request(server).post('/api/products').send({
            "name": "Mouse - Testing",
            "price": 80,
        })

        expect(response.status).toBe(201)

        expect(response.status).not.toBe(200)
        expect(response.status).not.toBe(404)

        // console.log(response)
    })
})