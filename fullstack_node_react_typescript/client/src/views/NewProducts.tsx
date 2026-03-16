import { Link, Form } from "react-router-dom";

export async function action() {
    console.log('Desde actionForm function')
}

const NewProducts = () => {
    return ( 
          <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Add New Product</h2>

                <Link to="/" 
                    className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500">
                    Back to Products
                </Link>
            </div>

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