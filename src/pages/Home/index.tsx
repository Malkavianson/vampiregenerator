import Kindreds from "../../components/Kindreds";
import Menu from "../../components/Menu";
import * as Styled from "./styles";

const Home = (): JSX.Element => {
	return (
		<Styled.HomeContainer>
			<Menu path="home" />
			<Styled.HomeContentContainer>
				<Styled.HomeContentHeader>
					<div>
						<h1>World of Darkness</h1>
						<h2>Welcome to the domain of Kindreds</h2>
					</div>
				</Styled.HomeContentHeader>
				<Styled.HomeContentCards>
					<Kindreds />
				</Styled.HomeContentCards>
			</Styled.HomeContentContainer>
		</Styled.HomeContainer>
	);
};

export default Home;
