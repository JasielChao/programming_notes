import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
    product: Product
}

const ProductDetails = ({product} : ProductDetailsProps) => {

    const navigate = useNavigate()

    const isAvailable = product.availability

    return ( 
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailable ? 'Available' : 'Unavailable'}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`/products/${product.id}/edit`)}
                        className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                    >
                        Edit
                    </button>
                </div>
              
            </td>
        </tr> 
     );
}
 
export default ProductDetails;