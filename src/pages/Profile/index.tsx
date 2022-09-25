import Menu from "../../components/Menu";
import { ProfileContainer, ProfileContentContainer, ProfileContentHeader } from "./styles";

const Profile = (): JSX.Element => {
	return (
		<ProfileContainer>
			<Menu path="profile" />
			<ProfileContentContainer>
				<ProfileContentHeader>
					<div>
						<h1>🧛 Favorites 🧛‍♀️</h1>
						<h2>💻✍️ under building 💡⏳ </h2>
					</div>
				</ProfileContentHeader>
			</ProfileContentContainer>
		</ProfileContainer>
	);
};

export default Profile;
