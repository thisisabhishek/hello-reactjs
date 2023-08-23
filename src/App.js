import { useState } from 'react';
import './App.css'

function App() {

	const [counter, setCounter] = useState(0)

	const incrementValue = () => {
		setCounter((counter) => counter + 1)	
	}

  	return (
		<div>
			<div>Hello React App</div>
			<div>This is a ReactJS tutorial</div>
		</div>
  	);
}

export default App;
