import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AccountContext";
import Generate from "./pages/Generate";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Router = (): JSX.Element => {
	const { logged } = useAuth();

	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			{logged ? (
				<>
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
				</>
			) : (
				<Route
					path="/login"
					element={<Login />}
				/>
			)}
			<Route
				path="*"
				element={
					<Navigate
						to={logged ? "/" : "/login"}
						replace
					/>
				}
			/>
		</Routes>
	);
};
export default Router;
