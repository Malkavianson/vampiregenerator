import { ProfileContentCards, ProfileContentSelector } from "./styles";
import { Container, ContentContainer } from "../styles";
import TitleContent from "../../components/TitleContent";
import Favorites from "../../components/Favorites";
import Campaigns from "../../components/Campaigns";
import Menu from "../../components/Menu";
import { useState } from "react";

const Profile = (): JSX.Element => {
	const [profile, setProfile] = useState("favorites");

	return (
		<Container>
			<Menu path="profile" />
			<ContentContainer>
				<TitleContent>
					<ProfileContentSelector profile={profile}>
						<h2
							id="favorites"
							onClick={(): void => {
								setProfile("favorites");
							}}
						>
							🧛 Favorites 🧛‍♀️
						</h2>
						<h2
							id="campaigns"
							onClick={(): void => {
								setProfile("campaigns");
							}}
						>
							🧛 Campaigns 🧛‍♀️
						</h2>
					</ProfileContentSelector>
				</TitleContent>
				<ProfileContentCards>
					{profile === "favorites" && <Favorites />}
					{profile === "campaigns" && <Campaigns />}
				</ProfileContentCards>
			</ContentContainer>
		</Container>
	);
};

export default Profile;
