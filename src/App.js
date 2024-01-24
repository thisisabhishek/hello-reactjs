import './App.css'
import router from './Router';
import { RouterProvider } from 'react-router-dom';

function App() {

	return (
		<>
			<RouterProvider router={router}/>
		</>
		
  	);
}

export default App;