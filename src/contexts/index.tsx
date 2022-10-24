import { OrderSettingsProvider } from "./OrderSettings.contexts";
import { FavoritesProvider } from "./Favorites.context";
import { KindredProvider } from "./kindreds.contexts";
import { AuthProvider } from "./Account.contexts";
import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";

interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<FavoritesProvider>
					<OrderSettingsProvider>
						<KindredProvider>{children}</KindredProvider>
					</OrderSettingsProvider>
				</FavoritesProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default Providers;
