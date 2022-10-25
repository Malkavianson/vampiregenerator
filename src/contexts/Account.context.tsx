import type { AllProvidersProps, Auth, AuthProviderData } from "../types/interfaces";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const [logged, setLogged] = useState<boolean>(false);
	const [currentUser, setCurrentUser] = useState<Auth>();
	const navigate = useNavigate();

	const login = ({ token, user }: Auth): void => {
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify(user));
		setLogged(true);
		navigate("/");
	};

	const logout = (): void => {
		localStorage.clear();
		setLogged(false);
		navigate("/login");
	};

	const checkTokenExpiration = (): void => {
		const user = JSON.parse(localStorage.getItem("user") || "");
		const token = localStorage.getItem("token");

		const headers = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		api.get(`/users/${user.id}`, headers)
			.then(() => {
				setLogged(true);
				if (token) {
					setCurrentUser({
						token,
						user,
					});
				}
				navigate("/");
			})
			.catch(() => {
				logout();
			});
	};

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) checkTokenExpiration();
	}, []);

	return <AuthContext.Provider value={{ logged, login, logout, currentUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthProviderData => useContext(AuthContext);
