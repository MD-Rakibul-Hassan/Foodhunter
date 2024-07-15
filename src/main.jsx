import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./Contexts/AuthContext/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<RouterProvider router={route}>
			<App />
		</RouterProvider>
	</ContextProvider>
);
