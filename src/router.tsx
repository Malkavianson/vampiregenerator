import Home from "./pages/Home";
import { useState } from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Generate from "./pages/Generate";
import { Route, Routes } from "react-router-dom";

const Router = (): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [teste, setTeste] = useState(false);

	switch (teste) {
		case true:
			return (
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/profile"
						element={<Profile />}
					/>
					<Route
						path="/settings"
						element={<Settings />}
					/>
					<Route
						path="/generate"
						element={<Generate />}
					/>
				</Routes>
			);
		default:
			return (
				<Routes>
					<Route
						path="/"
						element={<Login />}
					/>
				</Routes>
			);
	}
};
export default Router;
