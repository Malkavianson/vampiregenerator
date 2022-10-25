import { useFavorites } from "../../contexts/Favorites.context";
import { useAuth } from "../../contexts/Account.contexts";
import { FavoritesPool } from "./styles";
import { useEffect } from "react";
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
						currentKey={i}
						key={i}
					/>
				);
			})}
		</FavoritesPool>
	);
};

export default Favorites;
