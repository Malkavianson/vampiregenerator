import { HomeContainer, HomeContentCards, HomeContentContainer, HomeContentHeader } from "./styles";
import Kindreds from "../../components/Kindreds";
import OrderNav from "../../components/OrderNav";
import Menu from "../../components/Menu";

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
				<OrderNav />
				<HomeContentCards>
					<Kindreds />
				</HomeContentCards>
			</HomeContentContainer>
		</HomeContainer>
	);
};

export default Home;
