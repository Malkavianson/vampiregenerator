import { useOrderSettings } from "../../contexts/OrderSettings.contexts";
import { useKindred } from "../../contexts/kindreds.contexts";
import { KindredsPool, LoadingTitle } from "./styles";
import { useEffect } from "react";
import Kindred from "../Kindred";

const Kindreds = (): JSX.Element => {
	const { orderBy, orderDirection, category } = useOrderSettings();
	const { status, kindreds, handleGetServerStatus, toggleCategory, toggleOrderBy } = useKindred();

	useEffect(() => {
		toggleOrderBy();
	}, [orderBy, orderDirection]);
	useEffect(() => {
		toggleCategory();
	}, [category]);

	useEffect(() => {
		handleGetServerStatus();
	}, []);

	return (
		<>
			{Boolean(!status) && <LoadingTitle>Please wait, loading content...</LoadingTitle>}
			{Boolean(status) && (
				<KindredsPool>
					{kindreds.map((e, i) => {
						return (
							<Kindred
								kindred={e}
								currentKey={i}
								key={i}
							/>
						);
					})}
				</KindredsPool>
			)}
		</>
	);
};

export default Kindreds;
