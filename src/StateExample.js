const StateExample = () => {

	/*
		Introduction to State
	*/

	const [counter, setCounter] = useState(0)

	const incrementValue = (counter) => {
		setCounter(counter + 1)
	}

	const decrementValue = () => {
		setCounter(counter - 1)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
    	const f = new FormData(form);
		const formObj = Object.fromEntries(f.entries());
    	console.log(formObj);
  	};

	return(
		<>
			<div className='card flex-apart'>
				<button onClick={decrementValue}>-</button>
				<span>$ {counter}</span>
				<button onClick={incrementValue}>+</button>
			</div>
		</>
	)
}