import { useFavorites } from "../../contexts/Favorites.context";
import { useAuth } from "../../contexts/Account.contexts";
import { useEffect } from "react";
import { FavoritesPool } from "./styles";
import Kindred from "../Kindred";

const Favorites = (): JSX.Element => {
	const { logged } = useAuth();
	const { favorites, handleGetFavorites } = useFavorites();

	useEffect(() => {
		if (logged) handleGetFavorites();
	}, []);
	return (
		<FavoritesPool>
			{favorites.map((e, i) => {
				return (
					<Kindred
						kindred={e.kindred}
						key={i}
					/>
				);
			})}
		</FavoritesPool>
	);
};

export default Favorites;
