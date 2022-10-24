import mixings from "src/assets/styles/mixins";
import { KindredAreaProps } from "src/types/interfaces";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const FaceFramer = styled.div`
	position: absolute;
	height: 15rem;
	max-height: 50%;
	width: 15rem;
	max-width: 50%;
	border-radius: 0 0 0 5rem;
	top: 0;
	right: 0;
	padding: 2rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: nowrap;
	gap: 3rem;
	transition: 0.84s;

	div {
		svg {
			opacity: 0;
		}
		img {
			max-height: 100%;
			width: 100%;
		}
	}
`;

export const KindredArea = styled.section<KindredAreaProps>`
	position: relative;
	width: 95%;
	height: auto;
	max-width: 80em;

	${({ isFav }): false | FlattenSimpleInterpolation | undefined =>
		isFav &&
		css`
			&:hover > ${FaceFramer} {
				div {
					svg {
						path#9 {
							fill: #9c7f00;
						}

						path#A {
							fill: #edd400;
						}
					}
				}
			}
		`}

	&:hover > ${FaceFramer} {
		background: ${mixings.colors.contrast0}11;
		z-index: 1;

		div {
			width: 30%;
			max-height: 50%;
			svg {
				opacity: 1;
				z-index: 1;
				cursor: pointer;

				path#Download {
					fill: #f55;
				}
			}

			svg:hover {
				path#Download {
					fill: #bbbbbb77;
				}
			}

			svg:active {
				path#Download {
					stroke: #ffffff77;
				}
				path#9 {
					fill: #9c7f00;
				}

				path#A {
					fill: #edd400;
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
	color: ${mixings.colors.contrast0};
	background: ${mixings.colors.contrast1};
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
