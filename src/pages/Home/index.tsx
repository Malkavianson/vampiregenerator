import { useState } from "react";
import Kindreds from "../../components/Kindreds";
import Menu from "../../components/Menu";
import { CategorySelector, HomeContainer, HomeContentCards, HomeContentContainer, HomeContentHeader, OrderBySelector, OrderDirectionSelector, PageSelectors } from "./styles";

const Home = (): JSX.Element => {
	const [orderBy, setOrderBy] = useState("creation");
	const [orderDirection, setOrderDirection] = useState("asc");
	const [category, setCategory] = useState("all");
	// const [numberPerPages, setNumberPerPages] = useState(10);

	return (
		<HomeContainer>
			<Menu path="home" />
			<HomeContentContainer>
				<HomeContentHeader>
					<div>
						<h1>World of Darkness</h1>
						<h2>Welcome to the domain of Kindreds</h2>
					</div>
				</HomeContentHeader>

				<PageSelectors>
					<OrderBySelector>
						<label htmlFor="orderBy">Order by</label>
						<div>
							<div>
								<input
									name="orderBy"
									id="orderBy-0"
									value="name"
									type="radio"
									onChange={(e): void => {
										setOrderBy(e.target.value);
									}}
								/>
								<label htmlFor="orderBy-0">Name</label>
							</div>
							<div>
								<input
									name="orderBy"
									id="orderBy-1"
									value="creation"
									type="radio"
									onChange={(e): void => {
										setOrderBy(e.target.value);
									}}
									defaultChecked
								/>
								<label htmlFor="orderBy-1">Lastest</label>
							</div>
							<div>
								<input
									name="orderBy"
									id="orderBy-2"
									value="clan"
									onChange={(e): void => {
										setOrderBy(e.target.value);
									}}
									type="radio"
								/>
								<label htmlFor="orderBy-2">Clan</label>
							</div>
							<div>
								<input
									name="orderBy"
									id="orderBy-3"
									value="generation"
									onChange={(e): void => {
										setOrderBy(e.target.value);
									}}
									type="radio"
								/>
								<label htmlFor="orderBy-3">Generation</label>
							</div>
						</div>
					</OrderBySelector>
					<OrderDirectionSelector>
						<label htmlFor="orderDirection">Order as</label>
						<div>
							<div>
								<input
									name="orderDirection"
									id="orderDirection-0"
									value="desc"
									type="radio"
									onChange={(e): void => {
										setOrderDirection(e.target.value);
									}}
								/>
								<label htmlFor="orderBy-0">Asc⬆</label>
							</div>
							<div>
								<input
									name="orderDirection"
									id="orderDirection-1"
									value="asc"
									type="radio"
									onChange={(e): void => {
										setOrderDirection(e.target.value);
									}}
									defaultChecked
								/>
								<label htmlFor="orderBy-1">Desc⬇</label>
							</div>
						</div>
					</OrderDirectionSelector>
					<CategorySelector>
						<div>
							<label htmlFor="select_clan">Show clã:</label>
							<select
								name="select_clan"
								id="select_clan"
								onChange={(e): void => {
									setCategory(e.target.value);
								}}
							>
								<option
									defaultValue="all"
									id="select_clan-0"
								></option>
								<option
									value="Brujah"
									id="select_clan-1"
								>
									Brujah
								</option>
								<option
									value="Gangrel"
									id="select_clan-2"
								>
									Gangrel
								</option>
								<option
									value="Malkavian"
									id="select_clan-3"
								>
									Malkavian
								</option>
								<option
									value="Nosferatu"
									id="select_clan-4"
								>
									Nosferatu
								</option>
								<option
									value="Toreador"
									id="select_clan-5"
								>
									Toreador
								</option>
								<option
									value="Tremere"
									id="select_clan-6"
								>
									Tremere
								</option>
								<option
									value="Ventrue"
									id="select_clan-7"
								>
									Ventrue
								</option>
								<option
									value="LaSombra"
									id="select_clan-8"
								>
									LaSombra
								</option>
								<option
									value="Tzimisce"
									id="select_clan-9"
								>
									Tzimisce
								</option>
								<option
									value="Assamite"
									id="select_clan-10"
								>
									Assamite
								</option>
								<option
									value="Followers of Set"
									id="select_clan-11"
								>
									Followers of Set
								</option>
								<option
									value="Giovanni"
									id="select_clan-12"
								>
									Giovanni
								</option>
								<option
									value="Ravnos"
									id="select_clan-13"
								>
									Ravnos
								</option>
							</select>
							{/* <label htmlFor="select_clan">Sheets per Pages</label>
							<select
								name="select_number"
								id="select_number"
								onChange={(e): void => {
									setNumberPerPages(Number(e.target.value));
								}}
							>
								<option
									defaultValue={10}
									id="select_number-0"
								>
									10
								</option>
								<option
									value={25}
									id="select_number-1"
								>
									25
								</option>
								<option
									value={50}
									id="select_number-2"
								>
									50
								</option>
								<option
									value={100}
									id="select_number-2"
								>
									100
								</option>
							</select> */}
						</div>
					</CategorySelector>
				</PageSelectors>

				<HomeContentCards>
					<Kindreds
						orderBy={orderBy}
						orderDirection={orderDirection}
						category={category}
						// numberPerPages={numberPerPages}
					/>
				</HomeContentCards>
			</HomeContentContainer>
		</HomeContainer>
	);
};

export default Home;
