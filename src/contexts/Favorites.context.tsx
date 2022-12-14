import { AllProvidersProps, ApiFavorites, FavoritesProviderData } from "../types/interfaces";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./Account.context";
import { api } from "../services";

const FavoriteContext = createContext({} as FavoritesProviderData);

export const FavoritesProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged, currentUser } = useAuth();

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

	const favThis = (id: string, isFav: boolean): void => {
		if (logged && currentUser) {
			const token = localStorage.getItem("token");
			switch (isFav) {
				case true:
					const favId = favorites.find(e => e.kindredId === id);
					if (favId) {
						const deleteData = {
							headers: {
								Authorization: `Bearer ${token}`,
							},
							data: {
								favoriteId: favId.id,
							},
						};
						api.delete(`/favorites`, deleteData).then(res => {
							if (res.status === 204) {
								handleGetFavorites();
							}
						});
					}
					break;
				case false:
					const headers = {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					};
					const body = {
						userId: currentUser.user.id,
						kindredId: id,
					};
					api.post(`/favorites`, body, headers).then(res => {
						if (res.status === 201) {
							handleGetFavorites();
						}
					});
					break;
			}
		}
	};

	useEffect(() => {
		if (logged) handleGetFavorites();
	}, [logged]);

	return <FavoriteContext.Provider value={{ favorites, handleGetFavorites, favThis }}>{children}</FavoriteContext.Provider>;
};

export const useFavorites = (): FavoritesProviderData => useContext(FavoriteContext);
