import { FaceFramer, KindredArea, KindredHeader, KindredMain, KindredSheet, TypeTable, TypeTBody, TypeTBodyCell, TypeTBodyRow, TypeTHead, TypeTHeadCell, TypeTHeadRow } from "./styles";
import { useFavorites } from "../../contexts/Favorites.context";
import type { PropKindred } from "../../types/interfaces";
import { useAuth } from "../../contexts/Account.context";
import { Download, StarSvg } from "../../assets/icons";
import handleDownloadPdf from "../../utils/pdf.tools";
import { useEffect, useRef, useState } from "react";
import blankKindred from "../../utils/blanKindred";
import loader from "../../assets/icons/loader.png";
import SubType from "../SubType/Index";

const Kindred = ({ kindred, currentKey }: PropKindred): JSX.Element => {
	const { favorites, favThis } = useFavorites();
	const { logged } = useAuth();

	const printRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	const [toDownload, setToDownload] = useState(false);
	const [isFav, setIsFav] = useState(false);
	const [toFav, setToFav] = useState(false);

	const handleFavorite = (): void => {
		if (favorites.some(e => e.kindredId === kindred.id)) {
			setIsFav(true);
		} else {
			setIsFav(false);
		}
	};

	useEffect(() => {
		if (logged) {
			handleFavorite();
		}
	}, [favorites]);

	switch (kindred) {
		case blankKindred:
			return <></>;

		default:
			const stats = {
				attributes: JSON.parse(kindred.attributes),
				abilities: JSON.parse(kindred.abilities),
				advantages: JSON.parse(kindred.advantages),
			};

			return (
				<KindredArea
					key={`kindredKey_${currentKey}`}
					isFav={isFav}
				>
					<KindredSheet ref={printRef}>
						<h1>Vampire the Masquerade</h1>
						<KindredHeader>
							<div>
								<span key={`playerKey_${currentKey}`}>Player: {kindred.player}</span>
								<span key={`nameKey_${currentKey}`}>Name: {kindred.name}</span>
								<span key={`RegisterKey_${currentKey}`}>{`Kindred register: ${kindred.kindredId}`}</span>
							</div>
							<div>
								<span key={`generationKey_${currentKey}`}>Generation: {kindred.generation}º</span>
								<img
									crossOrigin="anonymous"
									src={kindred.image}
									alt={`${kindred.clan} symbol`}
								/>
								<span key={`clanKey_${currentKey}`}>Clan: {kindred.clan}</span>
							</div>
						</KindredHeader>
						<KindredMain key={`kindredDataKey_${currentKey}`}>
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
					<FaceFramer>
						{logged && (
							<>
								{!toFav && (
									<div
										onClick={(): void => {
											setToFav(!toFav);
											favThis(kindred.id, isFav);
										}}
									>
										<StarSvg />
									</div>
								)}
								{toFav && (
									<div>
										<>
											{setTimeout(() => {
												setToFav(!toFav);
											}, 5000)}
											<img
												src={loader}
												alt="Loader"
											/>
										</>
									</div>
								)}
							</>
						)}
						<>
							{!toDownload && (
								<div
									onClick={(e): void => {
										setToDownload(!toDownload);
										handleDownloadPdf(printRef, kindred.name, kindred.kindredId);
										e.stopPropagation();
									}}
								>
									<Download />
								</div>
							)}
							{toDownload && (
								<div>
									<>
										{setTimeout(() => {
											setToDownload(!toDownload);
										}, 5000)}
										<img
											src={loader}
											alt="Loader"
										/>
									</>
								</div>
							)}
						</>
					</FaceFramer>
				</KindredArea>
			);
	}
};

export default Kindred;
