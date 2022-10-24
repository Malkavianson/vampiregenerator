import { Container, ContentContainer, ContentHeader } from "../styles";
import Favorites from "src/components/Favorites";
import { ProfileContentCards } from "./styles";
import Menu from "../../components/Menu";

// import OrderNav from "../../components/OrderNav";

const Profile = (): JSX.Element => {
	return (
		<Container>
			<Menu path="profile" />
			<ContentContainer>
				<ContentHeader>
					<div>
						<h1>World of Darkness</h1>
						<h2>🧛 Favorites 🧛‍♀️</h2>
					</div>
				</ContentHeader>
				{/* <OrderNav /> */}
				<ProfileContentCards>
					<Favorites />
				</ProfileContentCards>
			</ContentContainer>
		</Container>
	);
};

export default Profile;
