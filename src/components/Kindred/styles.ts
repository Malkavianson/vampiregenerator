import styled from "styled-components";

export const FaceFramer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.84s;

	div {
		svg {
			opacity: 0;
		}
	}
`;

export const KindredArea = styled.section`
	position: relative;
	width: 95%;
	height: auto;
	max-width: 80em;

	&:hover > ${FaceFramer} {
		background: #00000022;
		z-index: 1;

		div {
			width: 30%;
			max-height: 50%;
			svg {
				opacity: 1;
				z-index: 1;
				cursor: pointer;

				path {
					fill: #00000022;
				}
			}

			svg:hover {
				path {
					fill: #bbbbbb77;
				}
			}

			svg:active {
				path {
					stroke: #ffffff77;
				}
			}
		}
	}
`;

export const KindredSheet = styled.article`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;
	background: white;
	padding-bottom: 1em;
	user-select: none;

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
