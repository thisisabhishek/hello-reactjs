import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const EditProfile = () => {
	const [newUsername, setNewUsername] = useState();

	const context = useOutletContext();

	const storeNewUsername = (event) => {
		let val = event.target.value;
		setNewUsername(val);
	};

	const updateUsername = () => {
		context.setUser(newUsername);
	};

	return (
		<>
			<div className="home card">
				<p>Edit your Profile info:</p>
				<input
					onChange={storeNewUsername}
					type="text"
					placeholder="Provide username..."
				/>
				<button onClick={updateUsername} className="btn pink">
					Update
				</button>
			</div>
		</>
	);
};

export default EditProfile;
