import styled from "styled-components";
import mixings from "../../assets/styles/mixins";

export const SwicherButtom = styled.button`
	height: 3em;
	width: 10em;
	background: ${mixings.colors.primaryColor};
	border: none;
	border-radius: 1em;
	font-family: ${mixings.constants.FontFamily};
	font-size: 4em;
	cursor: pointer;

	&:hover {
		transform: scale(0.98);
	}
`;

export const SubmitButtom = styled.button`
	height: 3em;
	width: 10em;
	background: ${mixings.colors.primaryColor};
	border: none;
	border-radius: 2em;
	font-family: ${mixings.constants.FontFamily};
	font-size: 6em;
	cursor: pointer;

	&:hover {
		transform: scale(0.98);
	}
`;
