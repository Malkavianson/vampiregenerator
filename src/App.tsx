import "./App.css";
import GlobalStyle from "./assets/styles/global";
import { AuthProvider } from "./contexts/AccountContext";
import Router from "./router";

function App(): JSX.Element {
	return (
		<div className="App">
			<AuthProvider>
				<GlobalStyle />
				<Router />
			</AuthProvider>
		</div>
	);
}

export default App;
