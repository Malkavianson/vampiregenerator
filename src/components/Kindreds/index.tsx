import { useEffect, useState } from "react";
import blankKindred from "../../utils/blanKindred";
import { api } from "../../services";
import Kindred from "../Kindred";
import { KindredsPool, LoadingTitle } from "./styles";
interface PropsType {
	orderBy: string;
	orderDirection: string;
	category: string;
	// numberPerPages: number;
}
const Kindreds = ({ orderBy, orderDirection, category /*, numberPerPages*/ }: PropsType): JSX.Element => {
	const [status, getStatus] = useState(false);
	const [kindreds, setKindreds] = useState([blankKindred]);
	const [kindredsBK, setKindredsBK] = useState([blankKindred]);

	const handleGetKindreds = (): void => {
		if (status) {
			api.get("/kindred").then(res => {
				setKindreds(res.data);
				setKindredsBK(res.data);
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

	const toggleCategory = (): void => {
		switch (category) {
			case "":
				setKindreds(kindredsBK);
				break;

			default:
				const uni = kindredsBK.filter(e => e.clan === category);
				setKindreds(uni);
				break;
		}
	};
	const toggleOrderBy = (): void => {
		const uni = [...kindreds];

		switch (orderBy) {
			case "name":
				uni.sort((a, b): number => {
					if (a.name > b.name) {
						return 1;
					}
					if (a.name < b.name) {
						return -1;
					}
					return 0;
				});
				break;
			case "creation":
				uni.sort((a, b): number => {
					if (a.kindredCreation > b.kindredCreation) {
						return 1;
					}
					if (a.kindredCreation < b.kindredCreation) {
						return -1;
					}
					return 0;
				});
				break;
			case "clan":
				uni.sort((a, b): number => {
					if (a.clan > b.clan) {
						return 1;
					}
					if (a.clan < b.clan) {
						return -1;
					}
					return 0;
				});
				break;
			case "generation":
				uni.sort((a, b): number => {
					if (a.generation > b.generation) {
						return 1;
					}
					if (a.generation < b.generation) {
						return -1;
					}
					return 0;
				});
				break;
			default:
				break;
		}
		switch (orderDirection) {
			case "asc":
				uni.reverse();
				break;
			default:
				break;
		}

		setKindreds(uni);
	};

	// const splitPool = (): void => {
	// 	let part = [];
	// 	for(let i = 0; i < numberPerPages ; i++ ){

	// 	}
	// }

	useEffect(() => {
		toggleOrderBy();
	}, [orderBy, orderDirection]);
	useEffect(() => {
		toggleCategory();
	}, [category]);

	useEffect(() => {
		handleGetKindreds();
	}, [status]);
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
