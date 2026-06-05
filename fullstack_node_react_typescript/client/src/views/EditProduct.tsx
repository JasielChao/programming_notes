import { Link, Form, useActionData, ActionFunctionArgs, redirect, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ErrorMessege from './../components/ErrorMessege'
import { addProduct, getProductById, updateProduct } from '../services/ProductsServices'
import { Product } from "../types";

// Funcion para el action del formulario
export async function action({request, params} :  ActionFunctionArgs) {
    // Var para recuperar los daatos del FormData
    const data = Object.fromEntries(await request.formData())

    let error = "";
    if(Object.values(data).includes('')){
        error = 'All fields are required'
    }

    if(error.length){
        console.log("Error: " + error);
        return error;
    }

    if(params.id !== undefined){
        await updateProduct(data, +params.id)
        return redirect('/')
    }
}

export async function loader({params} : LoaderFunctionArgs) {

    if(params.id !== undefined){
        const product = await getProductById(+params.id) // El + es para convertirlo en un numero

        if(!product) {
            throw new Response('', {status: 404, statusText: 'Product not found'});
        }
        return product
    }
}

const availabilityOptions = [
   { name: 'Available', value: true},
   { name: 'Not Available', value: false}
]

const EditProduct = () => {


    // Obtenemos el valor retornado en la funcion action
    const error = useActionData() as string

    /* Obtenemos el valor pasado en la URL con la funcion loader */
    const product = useLoaderData() as Product

    return ( 
          <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Edit Product</h2>

                <Link to="/" 
                    className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500">
                    Back to Products
                </Link>
            </div>

            {error && <ErrorMessege>{error}</ErrorMessege>}

            <Form className="mt-10" 
                method="post"
            >
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="name"
                    >Name:</label>
                    <input 
                        id="name"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Product Name"
                        name="name"
                        defaultValue={product.name}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="price"
                    >Price:</label>
                    <input 
                        id="price"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Product Price"
                        name="price"
                         defaultValue={product.price}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="availability"
                    >Availability:</label>
                    <select 
                        id="availability"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        name="availability"
                        defaultValue={product?.availability.toString()}
                    >
                        {availabilityOptions.map(option => (
                        <option key={option.name} value={option.value.toString()}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <input
                type="submit"
                className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                value="Update Product"
                />
            </Form>
        </>
     );
}
 
export default EditProduct;