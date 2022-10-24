import GenerateForm from "../../components/GenerateForm";
import Menu from "../../components/Menu";
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
