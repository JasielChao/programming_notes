import { Router } from "express"
import { body, param } from 'express-validator';
import { creatProduct, getProducts, getProductById, updateProduct } from "./handlers/product";
import { handleInputErrors} from "./middleware";

const router = Router();

// Routing
/* Parametros:
    1- Ruta de la pagina
    2- Request
    3- Response
*/
router.get('/', getProducts)

router.get('/:id', 
    param('id').isInt().withMessage('ID not valid'),
    handleInputErrors,
    getProductById)

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

router.put('/:id', 
     // Validacion
    body('name')
        .notEmpty().withMessage('El nombre del Producto no puede ir vacio'),
    body('price')
    .isNumeric().withMessage('Valor no valido')
    .notEmpty().withMessage('El nombre del Precio no puede ir vacio')
    .custom(value => value > 0).withMessage('El valor no puede ser menor que cero'),
    body('availability')
    .isBoolean().withMessage('Valor no disponibilidad no valido'),
    handleInputErrors,
    updateProduct
)

router.patch('/', (req, res) => {
    res.send('patch: Hola mundo desde Express')
})

router.delete('/', (req, res) => {
    res.send('delete: Hola mundo desde Express')
})

export default router;