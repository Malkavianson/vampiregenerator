import { useFavorites } from "../../contexts/Favorites.context";
import { useAuth } from "../../contexts/Account.contexts";
import { useEffect } from "react";
import { FavoritesPool } from "./styles";
import Kindred from "../Kindred";

const Favorites = (): JSX.Element => {
	const { logged } = useAuth();
	const { favorites, handleGetFavorites } = useFavorites();
	// const { orderBy, orderDirection, category } = useOrderSettings();

	// const toggleCategory = (): void => {
	// 	switch (category) {
	// 		case "":
	// 			setKindreds(kindredsBK);
	// 			break;

	// 		default:
	// 			const uni = kindredsBK.filter(e => e.clan === category);
	// 			setKindreds(uni);
	// 			break;
	// 	}
	// };
	// const toggleOrderBy = (): void => {
	// 	const uni = [...kindreds];

	// 	switch (orderBy) {
	// 		case "name":
	// 			uni.sort((a, b): number => {
	// 				if (a.name > b.name) {
	// 					return 1;
	// 				}
	// 				if (a.name < b.name) {
	// 					return -1;
	// 				}
	// 				return 0;
	// 			});
	// 			break;
	// 		case "creation":
	// 			uni.sort((a, b): number => {
	// 				if (a.kindredCreation > b.kindredCreation) {
	// 					return 1;
	// 				}
	// 				if (a.kindredCreation < b.kindredCreation) {
	// 					return -1;
	// 				}
	// 				return 0;
	// 			});
	// 			break;
	// 		case "clan":
	// 			uni.sort((a, b): number => {
	// 				if (a.clan > b.clan) {
	// 					return 1;
	// 				}
	// 				if (a.clan < b.clan) {
	// 					return -1;
	// 				}
	// 				return 0;
	// 			});
	// 			break;
	// 		case "generation":
	// 			uni.sort((a, b): number => {
	// 				if (a.generation > b.generation) {
	// 					return 1;
	// 				}
	// 				if (a.generation < b.generation) {
	// 					return -1;
	// 				}
	// 				return 0;
	// 			});
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// 	switch (orderDirection) {
	// 		case "asc":
	// 			uni.reverse();
	// 			break;
	// 		default:
	// 			break;
	// 	}

	// 	setKindreds(uni);
	// };

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
