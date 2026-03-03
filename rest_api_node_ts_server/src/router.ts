import { Router } from "express"
import { body, param } from 'express-validator';
import { getProduct, getProductById, creatProduct, updateProduct, updateProductAvailability, deleteProduct } from "./handlers/product";
import { handleInputErrors} from "./middleware";

const router = Router();

// Routing
/* Parametros:
    1- Ruta de la pagina
    2- Request
    3- Response
*/
router.get('/', getProduct)

/*  Para pasar un valor dinamico por la URL ponemos : y el nombre que deseamos para el parametro 
    Ejemplo de la URL: http://localhost:4000/api/products/1
*/
router.get('/:id', 
    param('id').isInt().withMessage('ID no valido'), // Para validar que el id sea un numero
    handleInputErrors,
    getProductById
)

router.post('/', 

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
    param('id').isInt().withMessage('ID no valido'), // Para validar que el id sea un numero
    body('name')
        .notEmpty().withMessage('El nombre del Producto no puede ir vacio'),
    body('price')
    .isNumeric().withMessage('Valor no valido')
    .notEmpty().withMessage('El nombre del Precio no puede ir vacio')
    .custom(value => value > 0).withMessage('El valor no puede ser menor que cero'),
    body('availability').isBoolean().withMessage('Valor para disponibilidad no valido'),
    handleInputErrors,
    updateProduct
)

router.patch('/:id', 
     // Validacion
    param('id').isInt().withMessage('ID no valido'), // Para validar que el id sea un numero
    handleInputErrors,
    updateProductAvailability
)

router.delete('/:id', 
     // Validacion
    param('id').isInt().withMessage('ID no valido'), // Para validar que el id sea un numero
    handleInputErrors,
    deleteProduct
)


export default router;