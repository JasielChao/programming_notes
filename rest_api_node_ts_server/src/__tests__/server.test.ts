import request from "supertest";
import server from "../server";

/* Ejemplo test basico
    describe('Nuestro primer test', () => {
        // Test de lo que esperamos que se cumpla
        test(' Debe revisar que 1 + 1 sean 2', () => {
            expect(1 + 1).toBe(2)
        })

        // Test de lo que esperamos que NO se cumpla
        test(' Debe revisar que 1 + 1 sean 2', () => {
            expect(1 + 1).not.toBe(3)
        })
    })
*/

  describe('Test GET /api', () => {
        // Test de lo que esperamos que se cumpla
        test('It should send back a json response', async () => {
            const rest = await request(server).get('/api')

            expect(rest.status).toBe(200)
            expect(rest.headers['content-type']).toMatch(/json/)

            expect(rest.status).not.toBe(404)

            // console.log(rest)
        })
    })