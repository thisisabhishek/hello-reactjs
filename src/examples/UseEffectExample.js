import { useState, useEffect } from 'react';
import './App.css'

function App() {

	const [showForm, setShowForm] = useState(false)

	const toggleForm = () => {
		setShowForm(!showForm)
	}

  	return (
		<>
			<h1>Component Lifecycle</h1>
			<div className='card'>Please provide your name to begin: <button onClick={toggleForm}>Add Name</button></div>
			<br/>
			{showForm && <NameForm/>}
		</>
		
  	);
}

export default App;

const NameForm = () => {

	const [name, setName] = useState("______")
	const [changed, setChanged] = useState(false)


	useEffect(() => {
		console.log("Component loaded...")

		return(() => {
			console.log("Component removed...")
		})
	}, [])

	const updateName = (event) => {
		setName(event.target.value)
	}

	const updateFlag = () => {
		setChanged(!changed)
	}

	return (
		<>
			<div>
				<input type="text" name="fullname" placeholder='Enter name...' onBlur={updateName}/>
				<button onClick={updateFlag}>Update Flag</button>
				<p>Welcome {name}</p>
				<p>Changed Flag: {changed ? "Yes": "No"}</p>
			</div>
		</>
	)
}