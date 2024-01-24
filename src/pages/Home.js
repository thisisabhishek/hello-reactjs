import React from "react";
import { useOutletContext } from 'react-router-dom'

const Home = () => {

	const context = useOutletContext()

	return (
		<div className="home card">
			<div className="mb-10">Welcome to Studytonight Shop</div>
			{!context.user && <div><button onClick={context.loginUser} className="btn pink">Login</button></div>}
		</div>
	);
};

export default Home;