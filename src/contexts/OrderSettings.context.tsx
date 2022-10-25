import { createContext, useContext, useEffect, useState } from "react";
import { AllProvidersProps } from "../types/interfaces";
import type { Dispatch, SetStateAction } from "react";
import { useFavorites } from "./Favorites.context";
import { useAuth } from "./Account.context";

interface OrderSettingsProviderData {
	orderBy: string;
	orderDirection: string;
	category: string;
	pageLength: number;
	setOrderBy: Dispatch<SetStateAction<string>>;
	setOrderDirection: Dispatch<SetStateAction<string>>;
	setCategory: Dispatch<SetStateAction<string>>;
	setPageLenght: Dispatch<SetStateAction<number>>;
}

const OrderContext = createContext({} as OrderSettingsProviderData);

export const OrderSettingsProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged } = useAuth();
	const { handleGetFavorites } = useFavorites();

	const [orderBy, setOrderBy] = useState("creation");
	const [orderDirection, setOrderDirection] = useState("desc");
	const [category, setCategory] = useState("all");
	const [pageLength, setPageLenght] = useState(6);

	useEffect(() => {
		if (logged) handleGetFavorites();
	}, [orderBy, orderDirection, category]);

	return <OrderContext.Provider value={{ orderBy, orderDirection, category, pageLength, setOrderBy, setOrderDirection, setCategory, setPageLenght }}>{children}</OrderContext.Provider>;
};

export const useOrderSettings = (): OrderSettingsProviderData => useContext(OrderContext);
