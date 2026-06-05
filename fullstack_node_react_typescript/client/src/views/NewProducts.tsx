import { Link, Form, useActionData, ActionFunctionArgs, redirect } from "react-router-dom";
import ErrorMessege from './../components/ErrorMessege'
import { addProduct } from '../services/ProductsServices'

// Funcion para el action del formulario
export async function action({request} :  ActionFunctionArgs) {
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

    await addProduct(data)

    return redirect('/')
}

const NewProducts = () => {


    // Obtenemos el valor retornado en la funcion action
    const error = useActionData() as string

    return ( 
          <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Add New Product</h2>

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
                    />
                </div>
                <input
                type="submit"
                className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                value="Add Product"
                />
            </Form>
        </>
     );
}
 
export default NewProducts;