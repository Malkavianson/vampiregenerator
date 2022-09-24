import type { SubTypeProp } from "../../types/interfaces";
import type { Skill } from "../../types/types";
import { SubTypeTable, SubTypeTBody, SubTypeTBodyCell, SubTypeTBodyRow, SubTypeTHead } from "./styles";

const SubType = ({ subType }: SubTypeProp): JSX.Element => {
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
							<SubTypeTBodyCell>{e.value}</SubTypeTBodyCell>
						</SubTypeTBodyRow>
					);
				})}
			</SubTypeTBody>
		</SubTypeTable>
	);
};

export default SubType;
