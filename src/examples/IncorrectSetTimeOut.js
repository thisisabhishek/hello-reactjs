import { useEffect, useState } from 'react';
import './App.css'
import Axios from 'axios';

function App() {

	const [joke, setJoke] = useState({})
	const [showPunchline, setShowPunchline] = useState(false)

	const generateJoke = () => {
		setShowPunchline(false)
		// fetch("https://official-joke-api.appspot.com/random_joke")
		// .then((res) => res.json())
		// .then((data) => {
		// 	setJoke(data)
		// })
		Axios.get("https://official-joke-api.appspot.com/random_joke")
		.then((res)=> {
			setJoke(res.data)
		})

		setTimeout(() => {
			setShowPunchline(true)
		}, 3000)
	}

	useEffect(() => {
		generateJoke()
		console.count("effect runs!")
	}, [])

	console.count("Component re-rendered!")

  	return (
		<>
			<h1>Random Jokes:</h1>
			<div>
				<div>{joke.setup}</div>
				{showPunchline && <div>{joke.punchline}</div>}
				<br/>
				<div><button onClick={generateJoke}>Generate Joke</button></div>
			</div>
		</>
		
  	);
}

export default App;