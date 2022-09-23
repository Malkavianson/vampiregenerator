import styled from "styled-components";

export const SettingsContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	background: #282a36;
	color: #f8f8f2;
`;

export const SettingsContentContainer = styled.div`
	width: calc(100% - 15rem);
`;

export const SettingsContentHeader = styled.header`
	width: 100%;
	height: 16vh;
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
