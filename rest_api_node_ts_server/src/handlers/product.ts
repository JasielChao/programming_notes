import {Request, Response} from 'express'
import Product from '../models/Product.model';
import colors from 'colors';

export const creatProduct = async (req: Request, res: Response) => {


    // Para guardar el producto en la base de dato
    const product = new Product(req.body);
    const savedProduct = await product.save();

    res.json({data: savedProduct})
};