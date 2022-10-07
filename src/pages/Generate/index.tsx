import Menu from "../../components/Menu";
import GenerateForm from "../../components/GenerateForm";
import { Container } from "../styles";

const Generate = (): JSX.Element => {
	return (
		<Container>
			<Menu path="generate" />
			<GenerateForm />
		</Container>
	);
};

export default Generate;
