import { FormContent, SettingsContent, SubmitButtom, ToggleButtom } from "./styles";
import { validateName, validatePassword } from "../../utils/validation.tools";
import { Container, ContentContainer, ContentHeader } from "../styles";
import { useAuth } from "../../contexts/Account.contexts";
import { DataType } from "../../types/interfaces";
import Input from "../../components/Input";
import Menu from "../../components/Menu";
import { api } from "src/services";
import { useState } from "react";

const Settings = (): JSX.Element => {
	const { currentUser, logged, logout } = useAuth();
	const [settingPage, setSettingPage] = useState(true);
	const [valueName, setValueName] = useState("");
	const [valuePassword, setValuePassword] = useState("");
	const [blind, setBlind] = useState(false);

	const patchUser = async (): Promise<void> => {
		const data: DataType = {};
		if (logged) {
			if (valueName !== "") {
				if (validateName(valueName)) {
					data.name = valueName;
				}
			}
			if (valuePassword !== "") {
				if (validatePassword(valuePassword)) {
					data.password = valuePassword;
				}
			}

			if (Boolean(data.name) || Boolean(data.password)) {
				if (currentUser) {
					const header = {
						headers: {
							Authorization: `Bearer ${currentUser.token}`,
						},
					};
					const patch = await api.patch(`/users/${currentUser.user.id}`, data, header).then(res => res);
					if (patch.status === 200) {
						logout();
					}
				}
			}
		}
	};

	return (
		<Container>
			<Menu path="settings" />
			<ContentContainer>
				<ContentHeader>
					<div>
						<h1>World of Darkness</h1>
						<h2>🛠 Settings ⚙️</h2>
					</div>
				</ContentHeader>
				<SettingsContent>
					<ToggleButtom
						onClick={(e): void => {
							setSettingPage(!settingPage);
							e.stopPropagation();
						}}
					>
						{settingPage ? `Delete user` : `Update user`}
					</ToggleButtom>
					{settingPage ? (
						<FormContent>
							<form name="update">
								<legend>Update your information</legend>
								<span>You must to sign in after update profile</span>
								<span>You cannot change your e-mail</span>
								<div>
									<Input
										label="name"
										type="text"
										value={setValueName}
									/>
									<Input
										label="password"
										type="password"
										value={setValuePassword}
									/>
								</div>

								<SubmitButtom
									onClick={(e): void => {
										patchUser();
										e.preventDefault();
										e.stopPropagation();
									}}
								>
									Update profile
								</SubmitButtom>
							</form>
						</FormContent>
					) : (
						<div>
							{!blind && (
								<SubmitButtom
									onClick={(e): void => {
										if (currentUser) {
											setBlind(!blind);
											const headers = {
												headers: {
													Authorization: `Bearer ${currentUser.token}`,
												},
											};
											api.delete(`/users/${currentUser.user.id}`, headers).then(res => {
												if (res.status === 204) {
													logout();
												}
											});
										}
										e.preventDefault();
										e.stopPropagation();
									}}
								>
									{blind && currentUser ? `Removing ${currentUser.user.name}'s account...` : `Delete profile`}
								</SubmitButtom>
							)}
						</div>
					)}
				</SettingsContent>
			</ContentContainer>
		</Container>
	);
};

export default Settings;
