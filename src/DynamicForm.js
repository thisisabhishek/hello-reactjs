import React, { useState } from 'react';

/*
  Handling FormData with onChange in inputs
*/

function DynamicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    subscribe: false,
  });

  const handleChange = (e) => {
	
  const name = e.target.name;
	const value = e.target.value;
	const type = e.target.type
	const checked = e.target.checked;

	console.log(e.target)

	console.log(name+"---"+value+"---"+type+"---"+checked)
    
    // Special handling for checkboxes
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can perform actions like sending data to a server
  };

  return (
    <div>
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
		<div>
          <label>Country:</label>
          <input type="radio" name="country" value="india" onChange={handleChange}/> India
		  <input type="radio" name="country" value="outside" onChange={handleChange}/> Outside India
        </div>
        <div>
          <label>Subscribe:</label>
          <input
            type="checkbox"
            name="subscribe"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default DynamicForm;
