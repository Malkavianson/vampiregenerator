import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const CampaignsRoom = styled.section`
	width: 100%;
	height: auto;
	min-height: calc(100% - 3rem);
	color: ${mixings.colors.contrast0};
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	justify-items: center;
	align-items: start;
	overflow-x: hidden;
	overflow-y: auto;
`;
export const CampaignsArticle = styled.article`
	display: flex;
	width: 80%;
	height: 75%;
	flex-direction: column;
	margin-top: 2em;
	padding: 1em 0.5em;
	gap: 3em;
	font-size: 3em;
	justify-content: space-around;
	align-items: center;
	border-radius: 3em 3em 1em 1em;
	box-shadow: inset 0 0 1em 0.05em #0009;

	div {
		width: 80%;
		border: solid 1px #000;
	}
`;

export const CampaignsArticleHeader = styled.span`
	width: 80%;
	height: 1em;
	box-shadow: 0 0 0.05em 0.1em #f55c, inset 0 0 0.5em 0.05em #f55;
	padding: 1rem 2rem 1.5rem 3rem;
	display: flex;
	justify-content: space-between;
	border-radius: 50em;

	svg {
		width: 20%;
		transition: 0.42s;
	}
`;
