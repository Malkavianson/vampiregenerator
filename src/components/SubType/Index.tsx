import type { SubTypeProp } from "../../types/interfaces";
import type { Skill } from "../../types/types";
import { SubTypeTable, SubTypeTBody, SubTypeTBodyCell, SubTypeTBodyRow, SubTypeTHead } from "./styles";

const SubType = ({ subType }: SubTypeProp): JSX.Element => {
	const dots = (value: number): string => {
		let res = "";
		const max = value > 5 ? 10 : 5;
		for (let i = 0; i < value; i++) {
			res = res + "●";
		}
		for (let i = value; i < max; i++) {
			res = res + "○";
		}
		return res;
	};

	return (
		<SubTypeTable>
			<SubTypeTHead>
				<tr>
					<th>{subType.type}</th>
				</tr>
			</SubTypeTHead>
			<SubTypeTBody>
				{subType.features.map((e: Skill, i: number) => {
					return (
						<SubTypeTBodyRow key={i}>
							<SubTypeTBodyCell>{e.skill}</SubTypeTBodyCell>
							<SubTypeTBodyCell>{dots(e.value)}</SubTypeTBodyCell>
						</SubTypeTBodyRow>
					);
				})}
			</SubTypeTBody>
		</SubTypeTable>
	);
};

export default SubType;
