import './App.css'
import {RouterProvider} from 'react-router-dom'
import router from './Router'
import { createBrowserRouter } from "react-router-dom";
import { useParams, useNavigate, Link, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.js'
import Products from './pages/Products.js'
import Root from './pages/Root.js'

function App() {

  	return (
		<>
			<RouterProvider router={router} />
		</>
		
  	);
}

export default App;

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

const Root = () => {
    return (
        <div style={{width:'400px'}}>
            <nav className='flex-apart'>
                <span>LOGO</span>
                <span><Link to="/profile">{username}</Link></span>
            </nav>
            <div className='flex-apart'>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/products/computer">Computer</Link>&nbsp;
                <Link to="/products/desk">Desk</Link>&nbsp;
                <Link to="/products/gadgets">Gadgets</Link>&nbsp;
                <Link to="/products/tshirts">Tshirts</Link>	
            </div>

            <Outlet />

        </div>
    )
}

const Home = () => {
    return (
      <div className='home card'>
        Welcome to Studytonight Shop
      </div>
    )
  }

  const Products = () => {

    const params = useParams()
    const nav = useNavigate()

    const applyFilter = (e) => {
        const filter = e.target.value;
        nav(`/products/${params.category}/${filter}`)
    }

    return (
        <div className='products card'>
            <div style={{float:'right'}}>
                <select onChange={applyFilter}>
                    <option>Price:</option>
                    <option value="high-to-low">High to Low</option>
                    <option value="low-to-high">Low to High</option>
                </select>
            </div>
            Product Filter: {params.category}
        </div>
    )
}