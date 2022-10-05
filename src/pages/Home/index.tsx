import { HomeContainer, HomeContentCards, HomeContentContainer, HomeContentHeader, HomeContentHeaderTitle } from "./styles";
import Kindreds from "../../components/Kindreds";
import OrderNav from "../../components/OrderNav";
import Menu from "../../components/Menu";
import { Title } from "src/assets/icons";

const Home = (): JSX.Element => {
	return (
		<HomeContainer>
			<Menu path="home" />
			<HomeContentContainer>
				<HomeContentHeader>
					<div>
						<HomeContentHeaderTitle>
							<Title />
						</HomeContentHeaderTitle>
						<h2>Welcome to the domain of Kindreds</h2>
					</div>
				</HomeContentHeader>
				<OrderNav />
				<HomeContentCards>
					<Kindreds />
				</HomeContentCards>
			</HomeContentContainer>
		</HomeContainer>
	);
};

export default Home;
