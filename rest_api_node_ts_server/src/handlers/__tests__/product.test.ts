import request from "supertest";
import server from "../../server";


describe('Test POST /api/products', () => {

     test('It should display validation errors', async () => {
        const response = await request(server).post('/api/products').send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')

        // console.log(response)
    })

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

describe('Test GET /api/products', () => {

    // Test de lo que esperamos que se cumpla
    test('It should get a json response with products', async () => {
        const response = await request(server).get('/api/products')

        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errors')

        // console.log(response)
    })
})

describe('Test GET /api/products/:id', () => {

    // Test de lo que esperamos que se cumpla
    test('It should return a 404 response for a non-existent product', async () => {
        
        const productId = 2000;
        const response = await request(server).get(`/api/products/${productId}`)

        expect(response.status).toBe(404)

        // console.log(response)
    })
})