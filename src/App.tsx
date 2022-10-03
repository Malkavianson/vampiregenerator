import "./App.css";
import GlobalStyle from "./assets/styles/global";
import Providers from "./contexts";
import Router from "./router";
import { Toaster } from "react-hot-toast";

function App(): JSX.Element {
	return (
		<div className="App">
			<Providers>
				<Toaster
					position="bottom-center"
					reverseOrder={false}
				/>
				<GlobalStyle />
				<Router />
			</Providers>
		</div>
	);
}

export default App;
