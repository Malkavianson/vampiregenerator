import mixings from "src/assets/styles/mixins";
import styled, { keyframes } from "styled-components";

const twink = keyframes`
	from {
		fill: ${mixings.colors.contrast0};
		stroke: ${mixings.colors.contrast1};
	}
	to {
		fill: ${mixings.colors.contrast0};
		stroke: ${mixings.colors.contrast1};
	}
`;

export const KindredRoullete = styled.div`
	position: relative;
	width: 100%;
	height: 5em;
	display: flex;

	svg:hover {
		path {
			animation: ${twink} 0.84s cubic-bezier(0.5, -0.3, 0.3, 1.5) alternate infinite;
		}
	}
`;
