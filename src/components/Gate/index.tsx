import { useAuth } from "../../contexts/Account.contexts";
import { SubmitButtom, SwicherButtom } from "./styles";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useState } from "react";
import Input from "../Input";

interface DataType {
	name?: string;
	email: string;
	password: string;
}

const error = (message: string): string => {
	return toast.error(message, {
		style: {
			borderRadius: "1rem",
			fontSize: "3rem",
			fontFamily: "'Roboto Regular', Arial",
		},
	});
};

const validateName = (name: string): boolean | void => {
	if (Boolean(name)) {
		return Boolean(name);
	} else {
		error("Name must be filled");
	}
};

const validateEmail = (mail: string): boolean | void => {
	const isEmail = /\S+@\S+\.\S+/;
	if (isEmail.test(mail)) {
		return isEmail.test(mail);
	} else {
		error("Email must be in format mail@mail.com");
	}
};

const validatePassword = (pw: string): boolean | void => {
	const isPw = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
	if (isPw.test(pw) && pw.length > 7) {
		return isPw.test(pw);
	} else {
		error("Must have a minimal of 8 characters, one uppercase, one lowercase, one symbol and one number.");
	}
};

const Gate = (): JSX.Element => {
	const { login } = useAuth();
	const [mode, setMode] = useState(true);
	const [valueName, setValueName] = useState("");
	const [valueEmail, setValueEmail] = useState("");
	const [valuePassword, setValuePassword] = useState("");

	const action = async (): Promise<void> => {
		const isValidEmail = validateEmail(valueEmail);
		const isValidPassword = validatePassword(valuePassword);

		if (isValidEmail && isValidPassword) {
			const data: DataType = {
				email: valueEmail,
				password: valuePassword,
			};

			switch (mode) {
				case false:
					const isValidName = validateName(valueName);
					if (isValidName) {
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
										error("couldn't login after register");
										break;
								}
								break;

							default:
								error("couldn't register");

								break;
						}
					}
					break;

				case true:
					const sigin = await api.post(`/auth/login`, data).then(res => res);
					switch (sigin.status) {
						case 201:
							login(sigin.data);
							break;

						default:
							error("Try again with correct credentials");
							break;
					}
					break;
			}
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
