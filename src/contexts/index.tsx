import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Account.contexts";
import { FavoritesProvider } from "./Favorites.context";

interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<FavoritesProvider>{children}</FavoritesProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default Providers;
