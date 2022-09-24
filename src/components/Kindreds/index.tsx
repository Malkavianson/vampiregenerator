import { useEffect, useState } from "react";
import { api } from "../../services";
import Kindred from "../kindred";
import * as Styled from "./styles";

const Kindreds = (): JSX.Element => {
	const [status, getStatus] = useState(false);
	const [kindreds, setKindreds] = useState([]);

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

	useEffect(() => {
		handleGetKindreds();
	}, [status]);

	useEffect(() => {
		handleGetServerStatus();
	}, []);

	return (
		<>
			<Styled.KindredsPool>
				{kindreds.map((e, i) => {
					return (
						<Kindred
							kindred={e}
							key={i}
						/>
					);
				})}
			</Styled.KindredsPool>
		</>
	);
};

export default Kindreds;
