import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const GenerateContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	background: ${mixings.colors.baseBg1};
	color: ${mixings.colors.contrast1};
`;

export const GenerateContentContainer = styled.div`
	width: calc(100% - 15rem);
`;

export const GenerateContentHeader = styled.header`
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

export const GenerateContentCards = styled.main`
	width: 100%;
	height: calc(100% - 20vh);
	overflow-y: auto;
`;

export const NewKindred = styled.section`
	width: 80%;
	color: ${mixings.colors.contrast0};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const GenerateContentCardsForm = styled.section`
	height: auto;
	min-height: 95%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	overflow-x: hidden;

	form {
		height: 30em;
		max-width: 600px;
		display: flex;
		align-items: center;
		font-size: 5em;

		fieldset {
			border: groove 3px #bd93f9cc;
		}
	}
`;

export const Homies = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const OnlyLogged = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 2rem;
	z-index: 1;
	color: ${mixings.colors.contrast0};
	text-shadow: -0.5rem 0.5rem 0.5rem #f555;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	text-decoration: underline;
	text-underline-offset: 2px;
	background: ${mixings.colors.contrast1}bb;
	cursor: pointer;
`;

export const Values = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.3em;

	label {
		font-size: 0.8em;
		margin-bottom: 0.5em;
	}

	select {
		height: 9rem;
		margin-bottom: 2em;
		border: none;
		border-radius: 0.3em;
		padding-left: 1.2em;
		font-family: "Modern Antiqua", cursive;

		option {
			height: 25px;
			font-size: 16px;
			font-family: "Modern Antiqua", cursive;
		}
	}
`;

export const Public = styled.div`
	position: relative;
	height: 4em;
	min-height: 70px;
	max-height: 90px;
	width: 100%;
	display: flex;
	margin-bottom: 2em;
	transition: 0.84s;

	&:hover {
		transform: scale(0.99);
	}

	svg {
		position: absolute;
		height: 100%;
		width: 100%;
	}

	&:hover > svg > path#background {
		fill: #f55;
	}

	&:hover > svg > path#center {
		fill: #ac82e8;
	}
`;

export const PublicButton = styled.button`
	height: 100%;
	width: 100%;
	border: none;
	background: transparent;
	font-family: "Modern Antiqua", cursive;
	cursor: pointer;
	z-index: 1;
`;
