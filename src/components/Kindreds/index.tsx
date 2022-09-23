import { useEffect, useState } from "react";
import { api } from "../../services";
import * as Styled from "./styles";

const Kindreds = (): JSX.Element => {
	const [kindreds, setKindreds] = useState();

	const handleGetKindreds = (): void => {
		api.get("/kindred").then(res => {
			setKindreds(res.data);
		});
	};

	useEffect(() => {
		handleGetKindreds();
	}, []);

	return (
		<>
			{console.log(kindreds)}
			<Styled.KindredsPool></Styled.KindredsPool>
		</>
	);
};

export default Kindreds;
