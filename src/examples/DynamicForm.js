import { useState } from 'react';
import './App.css'

function App() {

	const [formFields, setFormFields] = useState({
		name:'',
		email:'',
		gender:''
	})

	const handleFormField = (event) => {
		let val = event.target.value;
		let key = event.target.name;

		setFormFields({...formFields, [key]:val})
	}

	const handleForm = (event) => {
		event.preventDefault();
		console.log(formFields);
		console.log(JSON.stringify(formFields));
	}

  	return (
		<div>
			<form onSubmit={handleForm}>
				<div>
					<label>
						Fullname:
					</label>
					<input name="name" type="text" onChange={handleFormField}/>
				</div>
				<div>
					<label>
						Email:
					</label>
					<input name="email" type="email" onChange={handleFormField}/>
				</div>
				<div>
					<label>
						Gender:
					</label>
					<input type="radio" name="gender" value="male" onChange={handleFormField}/> Male
					<input type="radio" name="gender" value="female" onChange={handleFormField}/> Female
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
			<div>
				<p>Name is: {formFields.name}</p>
				<p>Email is: {formFields.email}</p>
				<p>Gender is: {formFields.gender}</p>
			</div>
		</div>
  	);
}

export default App;