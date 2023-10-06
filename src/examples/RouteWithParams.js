import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.js'
import Products from './pages/Products.js'

function App() {

  	return (
		<>
			<BrowserRouter>
				<div style={{width:'400px'}}>
					<nav>
						Studytonight
					</nav>
					<div className='flex-apart'>
						<Link to="/">Home</Link>&nbsp;
						<Link to="/products/computer">Computer</Link>&nbsp;
						<Link to="/products/desk">Desk</Link>&nbsp;
						<Link to="/products/gadgets">Gadgets</Link>&nbsp;
						<Link to="/products/tshirts">Tshirts</Link>	
					</div>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/products/:category/:filter?' element={<Products />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
		
  	);
}

export default App;

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

const Home = () => {
    return (
      <div className='home card'>
        Welcome to Studytonight Shop
      </div>
    )
  }