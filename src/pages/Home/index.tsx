import Kindreds from "../../components/Kindreds";
import Menu from "../../components/Menu";
import { HomeContainer, HomeContentCards, HomeContentContainer, HomeContentHeader } from "./styles";

const Home = (): JSX.Element => {
	return (
		<HomeContainer>
			<Menu path="home" />
			<HomeContentContainer>
				<HomeContentHeader>
					<div>
						<h1>World of Darkness</h1>
						<h2>Welcome to the domain of Kindreds</h2>
					</div>
				</HomeContentHeader>
				<HomeContentCards>
					<Kindreds />
				</HomeContentCards>
			</HomeContentContainer>
		</HomeContainer>
	);
};

export default Home;
