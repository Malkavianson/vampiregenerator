import Menu from "../../components/Menu";
import Gate from "../../components/Gate";
import { LoginContainer } from "./styles";
import { Container } from "../styles";

const Login = (): JSX.Element => {
	return (
		<Container>
			<Menu path="login" />
			<LoginContainer>
				<Gate />
			</LoginContainer>
		</Container>
	);
};

export default Login;
