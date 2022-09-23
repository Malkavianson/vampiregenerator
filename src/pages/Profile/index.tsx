import Menu from "../../components/Menu";
import * as Styled from "./styles";

const Profile = (): JSX.Element => {
	return (
		<Styled.ProfileContainer>
			<Menu path="profile" />
			<Styled.ProfileContentContainer>
				<Styled.ProfileContentHeader>
					<div>
						<h1>🧛 Favorites 🧛‍♀️</h1>
						<h2>💻✍️ under building 💡⏳ </h2>
					</div>
				</Styled.ProfileContentHeader>
			</Styled.ProfileContentContainer>
		</Styled.ProfileContainer>
	);
};

export default Profile;
