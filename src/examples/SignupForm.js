import './App.css'


/**
 * Simplest way to handle a Form in ReactJs
 */

function SignupForm() {

	const handleForm = (event) => {
		event.preventDefault();
		let form = event.target;
		let formData = new FormData(form);
		let formDataObj = Object.fromEntries(formData.entries())
		
		let formJSON = JSON.stringify(formDataObj)
		console.log(formDataObj)
		console.log(formJSON)
	}

  	return (
		<div>
	  		<h1>Signup Form</h1>
			<form onSubmit={handleForm} className='card'>
				<div>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						placeholder='Enter name...'
					/>
				</div>
				<div>
					<label>Email:</label>
					<input
						type="email"
						name="email"
						placeholder='Enter email...'
					/>
				</div>
				<div>
					<label>Gender:</label>
					<select name="gender">
						<option value="">Select</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
				<div>
					<label>Country:</label>
					<input type="radio" name="country" value="india"/> India
					<input type="radio" name="country" value="outside"/> Outside India
				</div>
				<div>
					<label>Subscribe:</label>
					<input
						type="checkbox"
						name="subscribe"
					/> Yes
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
	  		</form>
		</div>
  	);
}

export default SignupForm;
