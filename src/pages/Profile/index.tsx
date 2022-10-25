import { Container, ContentContainer } from "../styles";
import TitleContent from "../../components/TitleContent";
import Favorites from "../../components/Favorites";
import { ProfileContentCards } from "./styles";
import Menu from "../../components/Menu";

const Profile = (): JSX.Element => {
	return (
		<Container>
			<Menu path="profile" />
			<ContentContainer>
				<TitleContent>
					<h2>🧛 Favorites 🧛‍♀️</h2>
				</TitleContent>
				<ProfileContentCards>
					<Favorites />
				</ProfileContentCards>
			</ContentContainer>
		</Container>
	);
};

export default Profile;
