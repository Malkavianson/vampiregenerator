import styled from "styled-components";

export const KindredSheet = styled.article`
	width: 95%;
	max-width: 80em;
	aspect-ratio: 0.75;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;
	background: white;

	h1 {
		line-height: 1em;
		font-size: 4em;
	}
`;

export const KindredHeader = styled.header`
	width: 100%;
	height: 30%;
	max-height: 30rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	div {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		span {
			line-height: 2em;
			font-size: 3em;
			text-align: center;
		}
		img {
			width: 64px;
			max-height: 64px;
		}
	}
`;

export const KindredMain = styled.main`
	width: 100%;
	height: 70%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const TypeTable = styled.table`
	min-height: 15%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const TypeTHead = styled.thead`
	width: 100%;
	height: 4em;
`;

export const TypeTHeadRow = styled.tr`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TypeTHeadCell = styled.th`
	font-size: 3em;
	line-height: 2em;
	text-transform: capitalize;
`;

export const TypeTBody = styled.tbody`
	width: 90%;
	height: calc(100% - 4em);
	margin: 0 5%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const TypeTBodyRow = styled.tr`
	height: 100%;
	width: 33%;
`;

export const TypeTBodyCell = styled.td`
	height: 100%;
	width: 100%;
`;
