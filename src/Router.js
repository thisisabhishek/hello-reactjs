import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.js'
import Products from './pages/Products.js'
import Root from './pages/Root.js'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    index: true
                },
                {
                    path: "/products/:category/:filter?",
                    element: <Products />
                }
            ]
        }
    ]
);

export default router;