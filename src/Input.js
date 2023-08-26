import './App.css'
import { useId } from "react"

function App() {

  	return (
		<div>
			<Input label="Fullname" type="text" name="fullname"/>
			<Input label="Email Address" type="email" name="email"/>
			<Input label="Mobile Number" type="number" name="mobile"/>
		</div>
  	);
}

export default App;

const Input = (props) => {

    let uniqueId = useId()

    return (
        <div>
            <div>
                <label htmlFor={uniqueId}>{props.label}:</label>
            </div>
            <div>
                <input id={uniqueId} type={props.type} name={props.name} />
            </div>
        </div>
    )
}