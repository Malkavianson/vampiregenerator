import Menu from "../../components/Menu";
import GenerateForm from "../../components/GenerateForm";
import { GenerateContainer } from "./styles";

const Generate = (): JSX.Element => {
	return (
		<GenerateContainer>
			<Menu path="generate" />
			<GenerateForm />
		</GenerateContainer>
	);
};

export default Generate;
