import { createContext, useContext, useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { AllProvidersProps } from "../types/interfaces";
import { useAuth } from "./Account.contexts";
import { useFavorites } from "./Favorites.context";

interface OrderSettingsProviderData {
	orderBy: string;
	orderDirection: string;
	category: string;
	setOrderBy: Dispatch<SetStateAction<string>>;
	setOrderDirection: Dispatch<SetStateAction<string>>;
	setCategory: Dispatch<SetStateAction<string>>;
}

const OrderContext = createContext({} as OrderSettingsProviderData);

export const OrderSettingsProvider = ({ children }: AllProvidersProps): JSX.Element => {
	const { logged } = useAuth();
	const { handleGetFavorites } = useFavorites();

	const [orderBy, setOrderBy] = useState("creation");
	const [orderDirection, setOrderDirection] = useState("desc");
	const [category, setCategory] = useState("all");

	useEffect(() => {
		if (logged) handleGetFavorites();
	}, [orderBy, orderDirection, category]);

	return <OrderContext.Provider value={{ orderBy, orderDirection, category, setOrderBy, setOrderDirection, setCategory }}>{children}</OrderContext.Provider>;
};

export const useOrderSettings = (): OrderSettingsProviderData => useContext(OrderContext);
