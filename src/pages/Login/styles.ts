import styled from "styled-components";

export const LoginContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background: #282a36;
	color: #f8f8f2;
`;

export const SwicherButtom = styled.button`
	height: 3em;
	width: 10em;
	background: #f55;
	border: none;
	border-radius: 1em;
	font-family: "Modern Antiqua", cursive;
	font-size: 3em;

	&:hover {
		transform: scale(0.98);
	}
`;
