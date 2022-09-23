import "./App.css";
import GlobalStyle from "./assets/styles/global";
import Router from "./router";

function App(): JSX.Element {
	return (
		<div className="App">
			<GlobalStyle />
			<Router />
		</div>
	);
}

export default App;
