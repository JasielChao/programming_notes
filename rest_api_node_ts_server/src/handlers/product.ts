import {Request, Response} from 'express';
import { check, validationResult } from 'express-validator';
import Product from '../models/Product.model';
import colors from 'colors';

export const getProduct = async (req: Request, res: Response) => {

    try {
         /* Normal call 
            const products = await Product.findAll();
         */
        /* Para ordenarlos y limitarlos */
        const products = await Product.findAll({
            order: [
                ['id', 'DESC']
            ],
            limit: 10,
            attributes: {exclude: ["createdAt", "updatedAt"]} // Para no traer ciertos campos
        });

        
       
        res.json({data: products})
    } catch (error) {
        console.log(error);
    }
   
};


export const getProductById = async (req: Request, res: Response) => {

    try {
        /* Para obteber el valor del parametro de la URL se tiene que pasar el mismo nombre 
        del parametro que se nombre en el router 
            console.log(req.params.id)
        const {id} = req.params;

        */
        const id = Number(req.params.id);
        const product =  await Product.findByPk(id);


        if(!product){
            return res.status(404).json({
                error: 'Producto no encontrado'
            })
        }

        res.json({data: product})

       
    } catch (error) {
        console.log(error);
    }
   
};

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
        // Obtenemos el producto por ID
        const id = Number(req.params.id);
        const product =  await Product.findByPk(id);


        // Validamos que el producto exista
        if(!product){
            return res.status(404).json({
                error: 'Producto no encontrado'
            })
        }

        // Actualizamos el producto
        await product.update(req.body);
        await product.save();

        res.json({data: product})

       
    } catch (error) {
        console.log(error);
    }
   
};

export const updateProductAvailability = async (req: Request, res: Response) => {

    try {
        // Obtenemos el producto por ID
        const id = Number(req.params.id);
        const product =  await Product.findByPk(id);


        // Validamos que el producto exista
        if(!product){
            return res.status(404).json({
                error: 'Producto no encontrado'
            })
        }

        // Actualizamos el producto
        /* Si queremos tomar el valor insertado 
            product.availability = req.body.availability;
            
            Si queremos hacer un tooglee
        */
        product.availability = !product.dataValues.availability; // Lo contrario a lo que este en la BD
        await product.save();

        res.json({data: product})

       
    } catch (error) {
        console.log(error);
    }
   
};

export const deleteProduct = async (req: Request, res: Response) => {

    try {
        // Obtenemos el producto por ID
        const id = Number(req.params.id);
        const product =  await Product.findByPk(id);


        // Validamos que el producto exista
        if(!product){
            return res.status(404).json({
                error: 'Producto no encontrado'
            })
        }

        // Eleminamos el producto
        await product.destroy();

        res.json({data: 'Producto Eleminado'})

       
    } catch (error) {
        console.log(error);
    }
   
};