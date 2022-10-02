import Menu from "../../components/Menu";
import Gate from "../../components/Gate";
import { LoginContainer, LoginContent } from "./styles";

const Login = (): JSX.Element => {
	return (
		<LoginContent>
			<Menu path="login" />
			<LoginContainer>
				<Gate />
			</LoginContainer>
		</LoginContent>
	);
};

export default Login;
