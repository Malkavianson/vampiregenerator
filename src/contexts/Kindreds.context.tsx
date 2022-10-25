import { AllProvidersProps, KindredProviderData } from "../types/interfaces";
import { createContext, useContext, useEffect, useState } from "react";
import { useOrderSettings } from "./OrderSettings.context";
import { useFavorites } from "./Favorites.context";
import blankKindred from "src/utils/blanKindred";
import { useAuth } from "./Account.context";
import { api } from "../services";

const KindredContext = createContext({} as KindredProviderData);

export const KindredProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged } = useAuth();
	const { handleGetFavorites } = useFavorites();
	const { orderBy, orderDirection, category, pageLength } = useOrderSettings();

	const [allKindreds, setAllKindreds] = useState([blankKindred]);
	const [endOfPage, setEndOfPage] = useState(false);
	const [kindredsBK, setKindredsBK] = useState([blankKindred]);
	const [kindreds, setKindreds] = useState([blankKindred]);
	const [lastValidPage, setLastValidPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [status, getStatus] = useState(false);

	const handleGetKindreds = (): void => {
		if (status && category === "all") {
			api.get(`/kindred/${pageLength}/${currentPage}`).then(res => {
				if (kindreds.length <= 1) {
					setKindreds(res.data);
					setKindredsBK(res.data);
				} else if (kindreds.length < allKindreds.length) {
					const data = [...kindreds, ...res.data];
					setLastValidPage(currentPage);
					setKindreds(data);
					setKindredsBK(data);
				} else {
					setEndOfPage(true);
					setCurrentPage(lastValidPage);
				}
			});
			if (logged) handleGetFavorites();
		}
	};
	const handleGetAllKindreds = (): void => {
		if (status) {
			api.get("/kindred").then(res => {
				setAllKindreds(res.data);
			});
		}
	};
	const handleGetServerStatus = (): void => {
		setCurrentPage(1);
		api.get("/status").then(res => {
			if (res.status === 200) {
				getStatus(true);
			}
		});
	};
	const toggleCategory = (): void => {
		switch (category) {
			case "all":
				setKindreds(kindredsBK);
				break;

			default:
				const uni = allKindreds.filter(e => e.clan === category);
				setKindreds(uni);
				break;
		}
	};
	const toggleOrderBy = (): void => {
		const uni = [...kindreds];

		switch (orderBy) {
			case "name":
				uni.sort((a, b): number => {
					if (a.name > b.name) {
						return 1;
					}
					if (a.name < b.name) {
						return -1;
					}
					return 0;
				});
				break;
			case "creation":
				uni.sort((a, b): number => {
					if (a.kindredCreation > b.kindredCreation) {
						return 1;
					}
					if (a.kindredCreation < b.kindredCreation) {
						return -1;
					}
					return 0;
				});
				break;
			case "clan":
				uni.sort((a, b): number => {
					if (a.clan > b.clan) {
						return 1;
					}
					if (a.clan < b.clan) {
						return -1;
					}
					return 0;
				});
				break;
			case "generation":
				uni.sort((a, b): number => {
					if (a.generation > b.generation) {
						return 1;
					}
					if (a.generation < b.generation) {
						return -1;
					}
					return 0;
				});
				break;
			default:
				break;
		}
		switch (orderDirection) {
			case "asc":
				uni.reverse();
				break;
			default:
				break;
		}

		setKindreds(uni);
	};

	useEffect(() => {
		if (logged) handleGetFavorites();
		handleGetKindreds();
	}, [currentPage]);

	useEffect(() => {
		handleGetAllKindreds();
	}, [status]);

	useEffect(() => {
		if (logged) handleGetFavorites();
		handleGetKindreds();
	}, [status]);

	return <KindredContext.Provider value={{ endOfPage, currentPage, setCurrentPage, status, kindreds, handleGetServerStatus, toggleCategory, toggleOrderBy }}>{children}</KindredContext.Provider>;
};

export const useKindred = (): KindredProviderData => useContext(KindredContext);
