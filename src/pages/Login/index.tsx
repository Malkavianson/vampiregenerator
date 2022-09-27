import { useState } from "react";
import Register from "../../components/Register";
import SignIn from "../../components/SignIn";
import { LoginContainer, SwicherButtom } from "./styles";

const Login = (): JSX.Element => {
	const [mode, setMode] = useState(false);

	return (
		<LoginContainer>
			<>
				{mode && <SignIn />}
				{!mode && <Register />}
			</>
			<SwicherButtom
				onClick={(e): void => {
					e.stopPropagation;
					setMode(!mode);
				}}
			>
				{mode ? `Register` : `SignIn`}
			</SwicherButtom>
		</LoginContainer>
	);
};

export default Login;
