import { useState } from "react";
import { Values } from "./styles";

interface InputType {
	label: string;
	type: string;
	value: React.Dispatch<React.SetStateAction<string>>;
	step?: number;
	max?: number;
	min?: number;
}

const Input = ({ label, type, value, step, max, min }: InputType): JSX.Element => {
	const [blind, setBlind] = useState<boolean>(true);

	switch (type) {
		case "number":
			return (
				<Values>
					<label htmlFor={label}>{label}</label>
					<input
						id={`${label}_${type}_input`}
						name={label}
						placeholder={label}
						title={`Choose ${label}`}
						type={type}
						onChange={(e): void => {
							e.stopPropagation();
							value(e.target.value);
						}}
						step={step}
						max={max}
						min={min}
					/>
				</Values>
			);

		case "password":
			return (
				<Values>
					<label htmlFor={label}>{label}</label>
					<div id="container">
						<div
							id="blind"
							onClick={(): void => setBlind(!blind)}
						>
							{blind ? `🔒` : `🔓`}
						</div>
						<input
							id={`${label}_${type}_input`}
							name={label}
							placeholder={label}
							title={`Choose ${label}`}
							type={blind ? `password` : `text`}
							onChange={(e): void => {
								e.stopPropagation();
								value(e.target.value);
							}}
						/>
					</div>
				</Values>
			);
		default:
			return (
				<Values>
					<label htmlFor={label}>{label}</label>
					<input
						id={`${label}_${type}_input`}
						name={label}
						placeholder={label}
						title={`Choose ${label}`}
						type={type}
						onChange={(e): void => {
							e.stopPropagation();
							value(e.target.value);
						}}
					/>
				</Values>
			);
	}
};

export default Input;
