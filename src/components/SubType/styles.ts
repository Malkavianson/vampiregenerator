import styled from "styled-components";

export const SubTypeTable = styled.table`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const SubTypeTHead = styled.thead`
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: center;

	tr {
		height: 100%;
		width: 100%;

		th {
			font-size: 2em;
			line-height: 2em;
			text-decoration: underline;
			text-underline-offset: 1px;
			text-transform: capitalize;
		}
	}
`;

export const SubTypeTBody = styled.tbody`
	width: 100%;
	height: 70%;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

export const SubTypeTBodyRow = styled.tr`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const SubTypeTBodyCell = styled.td`
	margin-bottom: 0.25em;
	font-size: 1.5em;
	line-height: 1em;
	inline-size: 8em;
	overflow-wrap: break-word;
`;
