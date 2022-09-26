import styled from "styled-components";

export const GenerateContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	background: #282a36;
	color: #f8f8f2;
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
	color: black;
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

	form {
		height: 30em;
		display: flex;
		align-items: center;
		font-size: 5em;

		fieldset {
			border: groove 3px #bd93f9cc;
		}
	}
`;

export const Homies = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
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

	input {
		height: 3em;
		margin-bottom: 2em;
		border: none;
		border-radius: 0.5em;
		padding-left: 1em;
	}

	select {
		height: 9rem;
		margin-bottom: 2em;
		border: none;
		border-radius: 0.3em;
		padding-left: 1.2em;

		option {
			height: 25px;
			font-size: 16px;
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

	svg {
		position: absolute;
		height: 100%;
		width: 100%;
	}

	svg:hover > path#background {
		fill: #000;
	}
`;

export const PublicButton = styled.button`
	height: 100%;
	width: 100%;
	border: none;
	background: transparent;
	font-family: "Modern Antiqua", cursive;
	z-index: 1;
`;
