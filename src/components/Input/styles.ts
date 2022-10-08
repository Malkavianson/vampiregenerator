import styled from "styled-components";

export const Values = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.3em;
	font-size: 1rem;

	div#container {
		position: relative;
		height: auto;
		cursor: pointer;

		div {
			position: absolute;
			bottom: 2em;
			right: 0;
			font-size: 5em;
			max-height: 100%;
		}
	}

	label {
		text-transform: capitalize;
		font-size: 5em;
		margin-bottom: 0.8em;
	}

	input {
		height: 3em;
		margin-bottom: 2em;
		border: none;
		border-radius: 0.5em;
		padding-left: 1.5em;
	}
`;
