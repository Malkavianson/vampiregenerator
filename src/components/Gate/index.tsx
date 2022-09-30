import { Link } from "react-router-dom";
import { api } from "../../services";
import { useState } from "react";
import Input from "../Input";
import { SubmitButtom, SwicherButtom } from "./styles";

interface DataType {
	name?: string;
	email: string;
	password: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const postData = async (path: string, data: DataType) => {
	return await api.post(`/${path}`, data).then(res => res);
};

const Gate = (): JSX.Element => {
	const [mode, setMode] = useState(false);
	const [credentials, setCredentials] = useState();
	const [valueName, setValueName] = useState("");
	const [valueEmail, setValueEmail] = useState("");
	const [valuePassword, setValuePassword] = useState("");

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const action = async (): Promise<void> => {
		const data: DataType = {
			email: valueEmail,
			password: valuePassword,
		};

		switch (mode) {
			case false:
				data.name = valueName;
				const register = await postData("users", data);
				switch (register.status) {
					case 201:
						delete data.name;
						const loginAfterRegister = await postData("auth/login", data);
						switch (loginAfterRegister.status) {
							case 201:
								setCredentials(loginAfterRegister.data);
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
				const login = await postData("auth/login", data);
				switch (login.status) {
					case 201:
						setCredentials(login.data);
						break;

					default:
						console.log(login);
						break;
				}
				break;
		}
		console.log(credentials);
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

				<Link to="/">
					<SubmitButtom
					// onClick={(e): void => {
					// 	action();
					// 	e.preventDefault();
					// }}
					>
						{!mode ? `Register` : `SignIn`}
					</SubmitButtom>
				</Link>
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
