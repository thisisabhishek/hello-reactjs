import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'

function App() {

  	return (
		<>
			<BrowserRouter>
				<h1>This is my Portfolio</h1>
				<div>
					<Link to="/">Home</Link>&nbsp;
					<Link to="/projects">Projects</Link>&nbsp;
					<Link to="/contact">Contact</Link>
				</div>
				<br/>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/projects' element={<Projects />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
				</Routes>
			</BrowserRouter>
		</>
		
  	);
}

export default App;