import { FaceFramer, KindredArea, KindredHeader, KindredMain, KindredSheet, TypeTable, TypeTBody, TypeTBodyCell, TypeTBodyRow, TypeTHead, TypeTHeadCell, TypeTHeadRow } from "./styles";
import blankKindred from "../../utils/blanKindred";
import type { ApiKindred } from "../../types/interfaces";
import loader from "../../assets/icons/loader.png";
import { Download } from "../../assets/icons";
import { useRef, useState } from "react";
import SubType from "../SubType/Index";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

interface PropKindred {
	kindred: ApiKindred;
}

const Kindred = ({ kindred }: PropKindred): JSX.Element => {
	const printRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const [toDownload, setToDownload] = useState(false);

	const handleDownloadPdf = async (): Promise<void> => {
		const pdf = new jsPDF({
			orientation: "p",
			unit: "mm",
			format: "a4",
			putOnlyUsedFonts: true,
		});

		const element = printRef.current;
		const canvas = await html2canvas(element, { allowTaint: true, useCORS: true });

		const data = canvas.toDataURL("image/png");

		const imgProperties = pdf.getImageProperties(data);

		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
		const pdfName = `${kindred.name}_${kindred.kindredId}_https://vtmgenerator.vercel.app/_by:MalkavianSon`;

		pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

		pdf.save(`${pdfName}.pdf`);
	};

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
				<KindredArea>
					<KindredSheet ref={printRef}>
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
									crossOrigin="anonymous"
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
					<FaceFramer>
						{!toDownload && (
							<div
								onClick={(e): void => {
									setToDownload(!toDownload);
									handleDownloadPdf();
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
					</FaceFramer>
				</KindredArea>
			);
	}
};

export default Kindred;
