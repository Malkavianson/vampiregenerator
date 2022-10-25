import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const ContentContainer = styled.div`
	width: calc(100% - 15rem);
`;

export const ContentHeader = styled.header`
	width: 100%;
	height: 20vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	box-sizing: border-box;

	div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		h1 {
			font-size: 7rem;
		}
		h2 {
			font-size: 4rem;
		}
	}
`;

export const ContentHeaderTitle = styled.div`
	border: inset 1px ${mixings.colors.contrast1}cc;
	border-radius: 25rem;
	max-height: 25%;
	max-width: 70rem;
	margin-top: 5rem;
	padding: 2rem;
	box-shadow: 0 0 3rem 0.5rem #f55, inset 0 0 2rem 1rem #f55a;
	transition: 2s;

	&:hover {
		box-shadow: 0 0 3rem 0.5rem #ff5, inset 0 0 2rem 1rem #ffff5555;
	}
`;
