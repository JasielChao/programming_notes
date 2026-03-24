import { safeParse } from 'valibot';
import axios from 'axios' 
import {DraftproductSchema} from '../types'

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
        console.log(data)
        console.log('Desde get products')

    } catch (error) {
        console.log('Error get products')
        console.log(error)
    }
}