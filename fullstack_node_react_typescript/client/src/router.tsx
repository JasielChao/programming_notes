import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, {loader as productsLoader} from './views/Products'
import NewProducts, {action as newProductAction} from './views/NewProducts'

export const router = createBrowserRouter([
    {
       path: '/', // Home
       element: <Layout />, // Vista principal a cargar
       children: [ // Elementos hijos
            {
                index: true, // Para que se carge inicialmente en la vista padre
                element: <Products />,
                loader: productsLoader
            },
            {
                path: 'products/new', // Home
                element: <NewProducts />,
                action: newProductAction
            },
       ]
    }
])