import { ProfileContainer, ProfileContentCards, ProfileContentContainer, ProfileContentHeader } from "./styles";
import Favorites from "src/components/Favorites";
// import OrderNav from "../../components/OrderNav";
import Menu from "../../components/Menu";

const Profile = (): JSX.Element => {
	return (
		<ProfileContainer>
			<Menu path="profile" />
			<ProfileContentContainer>
				<ProfileContentHeader>
					<div>
						<h1>World of Darkness</h1>
						<h2>🧛 Favorites 🧛‍♀️</h2>
					</div>
				</ProfileContentHeader>
				{/* <OrderNav /> */}
				<ProfileContentCards>
					<Favorites />
				</ProfileContentCards>
			</ProfileContentContainer>
		</ProfileContainer>
	);
};

export default Profile;
