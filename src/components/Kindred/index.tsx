import type { ApiKindred } from "../../types/interfaces";
import SubType from "../SubType/Index";
import { KindredHeader, KindredMain, KindredSheet, TypeTable, TypeTBody, TypeTBodyCell, TypeTBodyRow, TypeTHead, TypeTHeadCell, TypeTHeadRow } from "./styles";

interface PropKindred {
	kindred: ApiKindred;
}

const Kindred = ({ kindred }: PropKindred): JSX.Element => {
	console.log(kindred);
	switch (kindred) {
		case undefined:
			return <></>;

		default:
			const stats = {
				attributes: JSON.parse(kindred.attributes),
				abilities: JSON.parse(kindred.abilities),
				advantages: JSON.parse(kindred.advantages),
			};

			return (
				<>
					<KindredSheet>
						<h1>Vampire the Masquerade</h1>
						<KindredHeader>
							<div>
								<span>Player: {kindred.player}</span>
								<span>Name: {kindred.name}</span>
								<span>{`Kindred register: ${kindred.kindredId}`}</span>
							</div>
							<div>
								<span>Generation: {kindred.generation}º</span>
								<img
									src={kindred.image}
									alt={`${kindred.clan} symbol`}
								/>
								<span>Clan: {kindred.clan}</span>
							</div>
						</KindredHeader>
						<KindredMain>
							<TypeTable>
								<TypeTHead>
									<TypeTHeadRow>
										<TypeTHeadCell>{stats.attributes.type}</TypeTHeadCell>
									</TypeTHeadRow>
								</TypeTHead>
								<TypeTBody>
									<TypeTBodyRow>
										<TypeTBodyCell>
											<SubType subType={stats.attributes.physical} />
										</TypeTBodyCell>
									</TypeTBodyRow>
									<TypeTBodyRow>
										<TypeTBodyCell>
											<SubType subType={stats.attributes.social} />
										</TypeTBodyCell>
									</TypeTBodyRow>
									<TypeTBodyRow>
										<TypeTBodyCell>
											<SubType subType={stats.attributes.mental} />
										</TypeTBodyCell>
									</TypeTBodyRow>
								</TypeTBody>
							</TypeTable>
							<TypeTable>
								<TypeTHead>
									<TypeTHeadRow>
										<TypeTHeadCell>{stats.abilities.type}</TypeTHeadCell>
									</TypeTHeadRow>
								</TypeTHead>
								<TypeTBody>
									<TypeTBodyRow>
										<TypeTBodyCell>
											<SubType subType={stats.abilities.talents} />
										</TypeTBodyCell>
									</TypeTBodyRow>
									<TypeTBodyRow>
										<TypeTBodyCell>
											<SubType subType={stats.abilities.skills} />
										</TypeTBodyCell>
									</TypeTBodyRow>
									<TypeTBodyRow>
										<TypeTBodyCell>
											<SubType subType={stats.abilities.knowledges} />
										</TypeTBodyCell>
									</TypeTBodyRow>
								</TypeTBody>
							</TypeTable>
							<TypeTable>
								<TypeTHead>
									<TypeTHeadRow>
										<TypeTHeadCell>{stats.advantages.type}</TypeTHeadCell>
									</TypeTHeadRow>
								</TypeTHead>
								<TypeTBody>
									<TypeTBodyRow>
										<TypeTBodyCell>
											<SubType subType={stats.advantages.disciplines} />
										</TypeTBodyCell>
									</TypeTBodyRow>
									<TypeTBodyRow>
										<TypeTBodyCell>
											<SubType subType={stats.advantages.backgrounds} />
										</TypeTBodyCell>
									</TypeTBodyRow>
									<TypeTBodyRow>
										<TypeTBodyCell>
											<SubType subType={stats.advantages.virtues} />
										</TypeTBodyCell>
									</TypeTBodyRow>
								</TypeTBody>
							</TypeTable>
						</KindredMain>
					</KindredSheet>
				</>
			);
	}
};

export default Kindred;
