import { GenerateContentCards, GenerateContentCardsForm, Homies, NewKindred, OnlyLogged, Public, PublicButton, Values } from "./styles";
import type { AxiosKindredData } from "../../types/interfaces";
import { ButtonGenerate } from "../../assets/icons";
import { useAuth } from "../../contexts/Account.contexts";
import blankKindred from "../../utils/blanKindred";
import { api } from "../../services";
import { useState } from "react";
import Kindred from "../Kindred";
import Loader from "../Loader";
import Input from "../Input";
import { Link } from "react-router-dom";

const Form = (): JSX.Element => {
	const { logged } = useAuth();
	const [status, setStatus] = useState(0);
	const [resKindred, setResKindred] = useState(blankKindred);

	const [valueName, setValueName] = useState("");
	const [valuePlayer, setValuePlayer] = useState("");
	const [valueGeneration, setValueGeneration] = useState("13");

	const submitKindred = (): void => {
		setStatus(1);
		const select = document.querySelectorAll("select");

		const data: AxiosKindredData = {};

		if (valueName !== "") {
			data.name = valueName;
		}
		if (valuePlayer) {
			data.player = valuePlayer;
		}
		if (select[0].value !== "") {
			data.clan = select[0].value;
		}
		if (valueGeneration) {
			data.generation = Number(valueGeneration);
		}

		api.post("/kindred", data).then(res => {
			setResKindred(res.data);
			setStatus(res.status);
		});
	};

	return (
		<GenerateContentCards>
			<GenerateContentCardsForm>
				{Boolean(status !== 201) && (
					<form
						name="register"
						onSubmit={(e): void => {
							submitKindred();
							e.preventDefault();
							e.stopPropagation();
						}}
					>
						<fieldset>
							<legend>Fill kindred informations</legend>
							<Homies>
								{!logged && (
									<Link to={"/login"}>
										<OnlyLogged>
											You must be logged to edit new kindred information
											<br />
											<br />
											(BUT you still can embrace a random stranger)
										</OnlyLogged>
									</Link>
								)}
								<Input
									label="name"
									type="text"
									value={setValueName}
								/>
								<Input
									label="player"
									type="text"
									value={setValuePlayer}
								/>
								<Values>
									<label htmlFor="clan">Clan</label>
									<select
										name="clan"
										id="clan"
									>
										<option
											id="clan-0"
											defaultValue={undefined}
										></option>
										<option
											value="Brujah"
											id="clan-1"
										>
											Brujah
										</option>
										<option
											value="Gangrel"
											id="clan-2"
										>
											Gangrel
										</option>
										<option
											value="Nosferatu"
											id="clan-3"
										>
											Nosferatu
										</option>
										<option
											value="Malkavian"
											id="clan-4"
										>
											Malkavian
										</option>
										<option
											value="Toreador"
											id="clan-5"
										>
											Toreador
										</option>
										<option
											value="Tremere"
											id="clan-6"
										>
											Tremere
										</option>
										<option
											value="Ventrue"
											id="clan-7"
										>
											Ventrue
										</option>
										<option
											value="LaSombra"
											id="clan-8"
										>
											LaSombra
										</option>
										<option
											value="Tzimisce"
											id="clan-9"
										>
											Tzimisce
										</option>
										<option
											value="Assamite"
											id="clan-10"
										>
											Assamite
										</option>
										<option
											value="Followers of Set"
											id="clan-11"
										>
											Followers of Set
										</option>
										<option
											value="Giovanni"
											id="clan-12"
										>
											Giovanni
										</option>
										<option
											value="Ravnos"
											id="clan-13"
										>
											Ravnos
										</option>
									</select>
								</Values>
								<Input
									label="generation"
									type="number"
									value={setValueGeneration}
									step={1}
									max={13}
									min={6}
								/>
							</Homies>
							{Boolean(status === 0) && (
								<Public>
									<ButtonGenerate />
									<PublicButton type="submit">Generate</PublicButton>
								</Public>
							)}
							{Boolean(status !== 0) && <Loader animated={true} />}
						</fieldset>
					</form>
				)}
				<NewKindred>
					{Boolean(status === 201) && (
						<>
							<Kindred
								currentKey={1}
								kindred={resKindred}
							/>
							<Public>
								<ButtonGenerate />
								<PublicButton
									onClick={(e): void => {
										e.stopPropagation;
										setStatus(0);
										setValueName("");
										setValuePlayer("");
										setValueGeneration("13");
									}}
								>
									New kindred
								</PublicButton>
							</Public>
							{Boolean(status !== 0) && <Loader />}
						</>
					)}
				</NewKindred>
			</GenerateContentCardsForm>
		</GenerateContentCards>
	);
};

export default Form;
