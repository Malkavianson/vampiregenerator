// import { Link } from "react-router-dom";
import { SubmitButtom, SwicherButtom } from "./styles";
import { useAuth } from "../../contexts/Account.contexts";
import { api } from "../../services";
import { useState } from "react";
import Input from "../Input";

interface DataType {
	name?: string;
	email: string;
	password: string;
}

const Gate = (): JSX.Element => {
	const { login } = useAuth();
	const [mode, setMode] = useState(true);
	const [valueName, setValueName] = useState("");
	const [valueEmail, setValueEmail] = useState("");
	const [valuePassword, setValuePassword] = useState("");

	const action = async (): Promise<void> => {
		const data: DataType = {
			email: valueEmail,
			password: valuePassword,
		};

		switch (mode) {
			case false:
				data.name = valueName;
				const register = await api.post(`/users`, data).then(res => res);
				switch (register.status) {
					case 201:
						delete data.name;
						const loginAfterRegister = await api.post(`/auth/login`, data).then(res => res);
						switch (loginAfterRegister.status) {
							case 201:
								login(loginAfterRegister.data);
								break;

							default:
								console.log(loginAfterRegister);
								break;
						}
						break;

					default:
						console.log(register);
						break;
				}
				break;

			case true:
				const sigin = await api.post(`/auth/login`, data).then(res => res);
				switch (sigin.status) {
					case 201:
						login(sigin.data);
						break;

					default:
						console.log(sigin);
						break;
				}
				break;
		}
	};

	return (
		<>
			<form name="Gate">
				<div>
					{!mode && (
						<Input
							label="name"
							type="text"
							value={setValueName}
						/>
					)}
					<Input
						label="email"
						type="email"
						value={setValueEmail}
					/>
					<Input
						label="password"
						type="password"
						value={setValuePassword}
					/>
				</div>

				<SubmitButtom
					onClick={(e): void => {
						action();
						e.preventDefault();
						e.stopPropagation();
					}}
				>
					{!mode ? `Register` : `SignIn`}
				</SubmitButtom>
			</form>
			<SwicherButtom
				onClick={(e): void => {
					e.stopPropagation;
					setMode(!mode);
				}}
			>
				{mode ? `Register` : `SignIn`}
			</SwicherButtom>
		</>
	);
};

export default Gate;
