import { safeParse } from 'valibot';
import axios from 'axios' 
import {DraftproductSchema, ProductsSchema, Product, ProductSchema} from '../types'

type ProductData = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data : ProductData) {
    try {
        console.log('Desde products services')
        const result = safeParse(DraftproductSchema, {
            name: data.name,
            price: +data.price // El + es para convertir el string to number
        })

        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/products/`
            const { data } = await axios.post(url, {
                    name: result.output.name,
                    price: result.output.price
            })

        }else {
            throw new Error('Datos no validos')
        }
        
    } catch (error) {
         console.log(error)
    }
}

export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/`
        const { data } = await axios(url)
        const result = safeParse(ProductsSchema, data.data)

        if(result.success){
            return result.output
        }else{
           throw new Error('Hubo un error en el getProducts') 
        }

    } catch (error) {
        console.log('Error get products')
        console.log(error)
    }
}

export async function getProductById(id : Product['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`
        const { data } = await axios(url)
        const result = safeParse(ProductSchema, data.data)

        if(result.success){
            return result.output
        }else{
           throw new Error('Hubo un error en el getProducts') 
        }

    } catch (error) {
        console.log('Error get products')
        console.log(error)
    }
}

export async function updateProduct(data : ProductData, id : Product['id']) {
    console.log(data)
    console.log(id)
}