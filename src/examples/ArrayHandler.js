import { useState } from 'react';
import './App.css'

/* 
	Hanling Array in State
*/
const ArrayHandler = () => {

	const createData = () => {
		let arr = ["Abhishek", "John", "Ron", "Aditya"]
		return arr;
	}

	const [students, setStudents] = useState(createData())

	const addStudents = (event) => {
		setStudents([...students, event.target.value])
	}

	const removeStudent = (event) => {
		let removeThis = event.target.value;
		let newArr = students.filter(function(val) {
			if(removeThis === val) {
				return false;
			}
			else {
				return true;
			}
		})
		setStudents(newArr)
	}

	return(
		<>
			<div className='card flex-apart'>
				<button className='btn pink' value="Ram" onClick={addStudents}>Ram</button>
				<button className='btn pink' value="Jenny" onClick={addStudents}>Jenny</button>
				<button className='btn pink' value="Mohit" onClick={addStudents}>Mohit</button>
				<button className='btn pink' value="Supriya" onClick={addStudents}>Supriya</button>
			</div>
			{
			students.map(function(val, index) {
				return(
					<div className="card flex-apart" key={val}>
						<span>{val}</span>
						<button onClick={removeStudent} value={val}>x</button>
					</div>
				)
			})
			}
		</>
	)
}

export default ArrayHandler;