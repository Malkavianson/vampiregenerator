import styled from "styled-components";

export const CategorySelector = styled.div`
	div {
		display: flex;
		flex-direction: column;

		select {
			font-family: "Modern Antiqua", cursive;

			option {
				font-family: "Modern Antiqua", cursive;
			}
		}
	}
`;
export const HomeContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	background: #282a36;
	color: #f8f8f2;
`;
export const HomeContentCards = styled.main`
	width: 100%;
	height: calc(100% - calc(20vh + 25em));
	overflow-y: auto;
`;
export const HomeContentContainer = styled.div`
	width: calc(100% - 15rem);
`;
export const HomeContentHeader = styled.header`
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
export const OrderBySelector = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	div {
		div {
			input {
				filter: hue-rotate(145deg);
			}
		}
	}
`;
export const OrderDirectionSelector = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	div {
		div {
			input {
				filter: hue-rotate(145deg);
			}
		}
	}
`;
export const PageSelectors = styled.div`
	height: 10em;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 2.5em;
`;
