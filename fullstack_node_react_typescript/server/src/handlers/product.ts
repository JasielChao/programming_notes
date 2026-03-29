import {Request, Response} from 'express';
import { check, validationResult } from 'express-validator';
import Product from '../models/Product.model';
import colors from 'colors';

export const getProducts = async (req: Request, res: Response) => {
     try {
        const products =  await Product.findAll({
            order: [
                ['id', 'ASC']
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            limit: 20
        })
        res.json({data: products})
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const product =  await Product.findByPk(id)

        if(!product) {
            return res.status(404).json({
                error: 'Product not found'
            })
        }
        res.json({data: product})
    } catch (error) {
        console.log(error);
    }
}

export const creatProduct = async (req: Request, res: Response) => {


    /* Validacion

        await check('name')
            .notEmpty().withMessage('El nombre del Producto no puede ir vacio')
            .run(req);
        await check('price')
        .isNumeric().withMessage('Valor no valido')
        .notEmpty().withMessage('El nombre del Precio no puede ir vacio')
        .custom(value => value > 0).withMessage('El valor no puede ser menor que cero')
        .run(req);
    

        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
    */


    // Para guardar el producto en la base de dato
    
    /* Opcion 1:
        const product = new Product(req.body);
        const savedProduct = await product.save();

        res.json({data: savedProduct})
    */

    // Opcion 2
    try {
        const product =  await Product.create(req.body);
        res.json({data: product})
    } catch (error) {
        console.log(error);
    }
   
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        // Obtener product para actualizar
        const id = Number(req.params.id)
        const product =  await Product.findByPk(id)

        if(!product) {
            return res.status(404).json({
                error: 'Product not found'
            })
        }

        // Actualizar product
        await product.update(req.body)
        await product.save()

        res.json({data: product})
    } catch (error) {
        console.log(error);
    }
}