import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const LoadingTitle = styled.h1`
	text-align: center;
	margin-top: 10rem;
`;

export const KindredsPool = styled.div`
	width: 100%;
	height: auto;
	min-height: calc(100% - 3rem);
	padding: 3rem 0;
	color: ${mixings.colors.contrast0};
	display: flex;
	gap: 2em;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	overflow-x: hidden;
	overflow-y: auto;
`;
