import { api } from "../../services";
import Menu from "../../components/Menu";
import { GenerateContainer, GenerateContentCards, GenerateContentContainer, GenerateContentHeader } from "./styles";

const Generate = (): JSX.Element => {
	return (
		<GenerateContainer>
			<Menu path="generate" />
			<GenerateContentContainer>
				<GenerateContentHeader>
					<div>
						<h1>World of Darkness</h1>
						<h2>Embrace a new kindred</h2>
					</div>
				</GenerateContentHeader>
				<GenerateContentCards>
					<div>
						<form
							name="register"
							onSubmit={(e): void => {
								const inputs = document.querySelectorAll("input");
								const select = document.querySelectorAll("select");

								const isUndefined = (value: string): string | undefined => {
									if ((value = "")) {
										return undefined;
									} else {
										return value;
									}
								};

								const data = {
									name: isUndefined(inputs[0].value),
									player: isUndefined(inputs[1].value),
									clan: isUndefined(select[0].value),
									generation: inputs[2].value,
								};

								console.log(data);

								api.post("/kindred", data).then(res => {
									console.log(res);
								});

								e.preventDefault();
								e.stopPropagation();
							}}
						>
							<fieldset name="register">
								<legend>Fill kindred informations</legend>
								<fieldset>
									<label htmlFor="name">Name</label>
									<input
										type="text"
										placeholder="Kindred's Name"
										name="name"
										id="name"
										title="Choose the Kindred's name"
									/>
								</fieldset>
								<fieldset>
									<label htmlFor="player">Player</label>
									<input
										type="text"
										placeholder="Your Name"
										name="player"
										id="player"
										title="Insert your name if you want"
									/>
								</fieldset>
								<fieldset>
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
								</fieldset>
								<fieldset>
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
								</fieldset>
								<div>
									<button type="submit">Generate</button>
								</div>
							</fieldset>
						</form>
					</div>
					<div></div>
				</GenerateContentCards>
			</GenerateContentContainer>
		</GenerateContainer>
	);
};

export default Generate;
