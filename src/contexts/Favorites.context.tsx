import { AllProvidersProps, ApiFavorites, FavoritesProviderData } from "../types/interfaces";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./Account.contexts";
import { api } from "../services";

const FavoriteContext = createContext({} as FavoritesProviderData);

export const FavoritesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged } = useAuth();

	const [favorites, setFavorites] = useState<ApiFavorites[]>([]);

	const handleGetFavorites = (): void => {
		const token = localStorage.getItem("token");

		const headers = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		if (logged) {
			const user = JSON.parse(localStorage.getItem("user") || "");
			api.get(`/favorites/user/${user.id}`, headers).then(res => {
				if (res.status === 200) setFavorites(res.data);
			});
		}
	};

	useEffect(() => {
		if (logged) handleGetFavorites();
	}, []);

	return <FavoriteContext.Provider value={{ favorites, handleGetFavorites: handleGetFavorites }}>{children}</FavoriteContext.Provider>;
};

export const useFavorites = (): FavoritesProviderData => useContext(FavoriteContext);
