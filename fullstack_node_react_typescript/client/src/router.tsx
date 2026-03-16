import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './views/Products'
import NewProducts from './views/NewProducts'

export const router = createBrowserRouter([
    {
       path: '/', // Home
       element: <Layout />, // Vista principal a cargar
       children: [ // Elementos hijos
            {
                index: true, // Para que se carge inicialmente en la vista padre
                element: <Products />
            },
            {
                path: 'products/new', // Home
                element: <NewProducts />
            },
       ]
    }
])