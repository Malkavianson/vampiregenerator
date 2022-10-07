import { Container, ContentContainer, ContentHeader } from "../styles";
import { HomeContentCards, HomeContentHeaderTitle } from "./styles";
import Kindreds from "../../components/Kindreds";
import OrderNav from "../../components/OrderNav";
import Menu from "../../components/Menu";
import { Title } from "src/assets/icons";

const Home = (): JSX.Element => {
	return (
		<Container>
			<Menu path="home" />
			<ContentContainer>
				<ContentHeader>
					<div>
						<HomeContentHeaderTitle>
							<Title />
						</HomeContentHeaderTitle>
						<h2>Welcome to the domain of Kindreds</h2>
					</div>
				</ContentHeader>
				<OrderNav />
				<HomeContentCards>
					<Kindreds />
				</HomeContentCards>
			</ContentContainer>
		</Container>
	);
};

export default Home;
