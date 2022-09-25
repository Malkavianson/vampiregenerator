import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Generate from "./pages/Generate";
import { Route, Routes } from "react-router-dom";

const Router = (): JSX.Element => {
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
};
export default Router;
