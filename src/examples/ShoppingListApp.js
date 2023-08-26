import { useState } from 'react';
import './App.css'

function App() {

	/**
	item{
		name: '',
		purchased: false
	}
	 */
	const [shoppingList, setShoppingList] = useState([])

	const addItem = (event) => {
		event.preventDefault();
		let form = event.target;
		let formData = new FormData(form)
		let formDataObj = Object.fromEntries(formData.entries())
		formDataObj.purchased = false;
		setShoppingList([...shoppingList, formDataObj])
	}

	const markDone = (event) => {
		let markIt = event.target.value;
		shoppingList.map(function(val, index) {
			if(markIt === val.name) {
				val.purchased = true;
			}
		})
		setShoppingList([...shoppingList])

	}

	const removeItem = (event) => {
		let removeIt = event.target.value;
		let newList = shoppingList.filter(function(item) {
			if(removeIt === item.name) {
				return false;
			}
			else {
				return true;
			}
		})
		setShoppingList(newList)
	}

  	return (
		<>
			<h1>Shopping List Manager</h1>
			<div className='card'>
				<form onSubmit={addItem} className='flex-apart'>
					<input type="text" name="name" placeholder='Add item to list...'/>
					<button className='btn purple' type='submit'>Add</button>
				</form>
			</div>
			{
				shoppingList.map(function(val, index){
					return(
						<div className={val.purchased ? 'card flex-apart green' : 'card flex-apart'} key={index}>
							<span>{val.name}</span>
							<span>
								<button className='btn pink' onClick={markDone} value={val.name}>Done</button>
								&nbsp;
								<button className='btn' onClick={removeItem} value={val.name}>x</button>
							</span>
						</div>
					);
				})
			}
		</>
		
  	);
}

export default App;