import { Router } from "express"
import { body } from 'express-validator';
import { creatProduct } from "./handlers/product";
import { handleInputErrors} from "./middleware";

const router = Router();

// Routing
/* Parametros:
    1- Ruta de la pagina
    2- Request
    3- Response
*/
router.get('/', (req, res) => {
    res.send('get: Hola mundo desde Express')
})

router.post('/api/products', 

    // Validacion
    body('name')
        .notEmpty().withMessage('El nombre del Producto no puede ir vacio'),
    body('price')
    .isNumeric().withMessage('Valor no valido')
    .notEmpty().withMessage('El nombre del Precio no puede ir vacio')
    .custom(value => value > 0).withMessage('El valor no puede ser menor que cero'),
    handleInputErrors,

    // Crear producto
    creatProduct
)

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