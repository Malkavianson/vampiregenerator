import { useEffect, useState } from "react";
import blankKindred from "../../utils/blanKindred";
import { api } from "../../services";
import Kindred from "../Kindred";
import { KindredsPool, LoadingTitle } from "./styles";

const Kindreds = (): JSX.Element => {
	const [status, getStatus] = useState(false);
	const [kindreds, setKindreds] = useState([blankKindred]);

	const handleGetKindreds = (): void => {
		if (status) {
			api.get("/kindred").then(res => {
				setKindreds(res.data);
			});
		}
	};
	const handleGetServerStatus = (): void => {
		api.get("/status").then(res => {
			if (res.status === 200) {
				getStatus(true);
			}
		});
	};

	// const classificar = (): void => {
	// 	// Classificar por clã
	// 	const uni = [...kindreds];
	// 	uni.sort((a, b): number => {
	// 		if (a.clan > b.clan) {
	// 			return 1;
	// 		}
	// 		if (a.clan < b.clan) {
	// 			return -1;
	// 		}
	// 		return 0;
	// 	});
	// 	// console.log(uni);
	// 	// console.log("sort");

	// 	// Separar por clã
	// 	// console.log(kindreds);
	// 	// const uni = kindreds.filter(e => e.clan === "Malkavian");
	// 	// console.log("find");
	// 	setKindreds(uni);
	// };

	useEffect(() => {
		handleGetKindreds();
	}, [status]);

	useEffect(() => {
		handleGetServerStatus();
	}, []);

	return (
		<>
			{/* <div
				onClick={(e): void => {
					classificar();
					e.stopPropagation();
				}}
			>
				teste clique aqui
			</div> */}
			{Boolean(!status) && <LoadingTitle>Please wait, loading content...</LoadingTitle>}
			{Boolean(status) && (
				<KindredsPool>
					{kindreds.map((e, i) => {
						return (
							<Kindred
								kindred={e}
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
