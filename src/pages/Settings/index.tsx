import Menu from "../../components/Menu";
import { SettingsContainer, SettingsContentContainer, SettingsContentHeader } from "./styles";

const Settings = (): JSX.Element => {
	return (
		<SettingsContainer>
			<Menu path="settings" />
			<SettingsContentContainer>
				<SettingsContentHeader>
					<div>
						<h1>🛠 Settings ⚙️</h1>
						<h2>💻✍️ under building 💡⏳ </h2>
					</div>
				</SettingsContentHeader>
			</SettingsContentContainer>
		</SettingsContainer>
	);
};

export default Settings;
