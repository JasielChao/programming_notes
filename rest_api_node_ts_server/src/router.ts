import { Router } from "express"
import { creatProduct } from "./handlers/product";

const router = Router();

// Routing
/* Parametros:
    1- Ruta de la pagina
    2- Request
    3- Response
*/
router.get('/', (req, res) => {
    res.send('Hola mundo desde Express')
})

router.post('/api/products', creatProduct)

router.put('/', (req, res) => {
    res.send('put: Hola mundo desde Express')
})

router.patch('/', (req, res) => {
    res.send('patch: Hola mundo desde Express')
})

router.delete('/', (req, res) => {
    res.send('delete: Hola mundo desde Express')
})

export default router;