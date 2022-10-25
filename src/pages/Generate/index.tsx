import { Container, ContentContainer } from "../styles";
import GenerateForm from "../../components/GenerateForm";
import Menu from "../../components/Menu";
import TitleContent from "src/components/TitleContent";

const Generate = (): JSX.Element => {
	return (
		<Container>
			<Menu path="generate" />
			<ContentContainer>
				<TitleContent>
					<h2>Embrace a new kindred</h2>
				</TitleContent>
				<GenerateForm />
			</ContentContainer>
		</Container>
	);
};

export default Generate;
