import React from "react";
import { Navigate, useOutletContext, Outlet } from "react-router-dom";

const ProtectedRoute = ({role}) => {
	const context = useOutletContext();
	console.log(context)
	if (!context.user || !context.user?.role.includes(role)) {
		return <Navigate to="/" replace />;
	}

	return <Outlet context={context}/>;
};

export default ProtectedRoute;
