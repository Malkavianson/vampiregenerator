import Menu from "../../components/Menu";
import * as Styled from "./styles";

const Settings = (): JSX.Element => {
	return (
		<Styled.SettingsContainer>
			<Menu path="settings" />
			<Styled.SettingsContentContainer>
				<Styled.SettingsContentHeader>
					<div>
						<h1>🛠 Settings ⚙️</h1>
						<h2>💻✍️ under building 💡⏳ </h2>
					</div>
				</Styled.SettingsContentHeader>
			</Styled.SettingsContentContainer>
		</Styled.SettingsContainer>
	);
};

export default Settings;
