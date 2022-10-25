import mixings from "../../assets/styles/mixins";
import styled, { css, Interpolation, keyframes } from "styled-components";

interface KindredRoulleteProps {
	animated?: boolean;
}

const twink = keyframes`
	from {
		fill: ${mixings.colors.contrast0}99;
		stroke: ${mixings.colors.contrast1}99;
	}
	to {
		fill: ${mixings.colors.contrast1}99;
		stroke: ${mixings.colors.contrast0}99;
	}
`;

export const KindredRoullete = styled.div<KindredRoulleteProps>`
	position: relative;
	width: 100%;
	height: 5em;
	display: flex;
	margin-bottom: 1em;

	${({ animated }): Interpolation<KindredRoulleteProps> =>
		animated &&
		css`
			svg:nth-child(1) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) alternate infinite;
				}
			}
			svg:nth-child(2) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -0.2s alternate infinite;
				}
			}
			svg:nth-child(3) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -0.4s alternate infinite;
				}
			}
			svg:nth-child(4) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -0.6s alternate infinite;
				}
			}
			svg:nth-child(5) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -0.8s alternate infinite;
				}
			}
			svg:nth-child(6) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -1s alternate infinite;
				}
			}
			svg:nth-child(7) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -1.2s alternate infinite;
				}
			}
			svg:nth-child(8) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -1.4s alternate infinite;
				}
			}
			svg:nth-child(9) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -1.6s alternate infinite;
				}
			}
			svg:nth-child(10) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -1.8s alternate infinite;
				}
			}
			svg:nth-child(11) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -2s alternate infinite;
				}
			}
			svg:nth-child(12) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -2.2s alternate infinite;
				}
			}
			svg:nth-child(13) {
				path {
					animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 0.5) -2.4s alternate infinite;
				}
			}
		`}

	svg:hover {
		path {
			animation: ${twink} 1.6s cubic-bezier(0.5, -0.3, 0.3, 1.5) alternate infinite;
		}
	}
`;
