import type { ApiKindred, AxiosKindredData } from "../../types/interfaces";
import { GenerateContentCards, GenerateContentCardsForm, GenerateContentContainer, GenerateContentHeader, Homies, NewKindred, Public, PublicButton, Values } from "./styles";
import { ButtonGenerate } from "../../assets/icons";
import { api } from "../../services";
import { useState } from "react";
import Kindred from "../Kindred";
import Loader from "../Loader";

const blankKindred: ApiKindred = {
	id: "",
	kindredId: "",
	kindredCreation: 0,
	image: "",
	name: "",
	player: "",
	clan: "",
	generation: 13,
	attributes: "",
	abilities: "",
	advantages: "",
};

const Form = (): JSX.Element => {
	const [status, setStatus] = useState(0);
	const [resKindred, setResKindred] = useState(blankKindred);
	const submitKindred = (): void => {
		setStatus(1);
		const inputs = document.querySelectorAll("input");
		const select = document.querySelectorAll("select");

		const isUndefined = (value: string): string | boolean => {
			if (value === "") {
				return false;
			} else {
				return true;
			}
		};

		const data: AxiosKindredData = {};

		if (isUndefined(inputs[0].value)) {
			data.name = inputs[0].value;
		}
		if (isUndefined(inputs[1].value)) {
			data.player = inputs[1].value;
		}
		if (isUndefined(select[0].value)) {
			data.clan = select[0].value;
		}
		if (isUndefined(inputs[2].value)) {
			data.generation = Number(inputs[2].value);
		}

		api.post("/kindred", data).then(res => {
			setResKindred(res.data);
			setStatus(res.status);
		});
	};

	return (
		<GenerateContentContainer>
			<GenerateContentHeader>
				<div>
					<h1>World of Darkness</h1>
					<h2>Embrace a new kindred</h2>
				</div>
			</GenerateContentHeader>
			<GenerateContentCards>
				<GenerateContentCardsForm>
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
								<Values>
									<label htmlFor="name">Name</label>
									<input
										type="text"
										placeholder="Kindred's Name"
										name="name"
										id="name"
										title="Choose the Kindred's name"
									/>
								</Values>
								<Values>
									<label htmlFor="player">Player</label>
									<input
										type="text"
										placeholder="Your Name"
										name="player"
										id="player"
										title="Insert your name if you want"
									/>
								</Values>
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
								<Values>
									<label htmlFor="generation">Generation</label>
									<input
										type="number"
										placeholder="13"
										name="generation"
										id="generation"
										defaultValue={13}
										step={1}
										max={13}
										min={6}
										title="Select Kindred's generation"
									/>
								</Values>
							</Homies>
							{Boolean(status === 0) && (
								<Public>
									<ButtonGenerate />
									<PublicButton type="submit">Generate</PublicButton>
								</Public>
							)}
							{Boolean(status !== 0) && <Loader />}
						</fieldset>
					</form>
					<NewKindred>
						{Boolean(status === 201) && (
							<>
								<Kindred kindred={resKindred} />
								<Public>
									<ButtonGenerate />
									<PublicButton
										onClick={(e): void => {
											e.stopPropagation;
											setStatus(0);
										}}
									>
										Try again
									</PublicButton>
								</Public>
							</>
						)}
					</NewKindred>
				</GenerateContentCardsForm>
			</GenerateContentCards>
		</GenerateContentContainer>
	);
};

export default Form;
