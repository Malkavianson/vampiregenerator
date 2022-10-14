import mixings from "../../assets/styles/mixins";
import styled from "styled-components";

export const CategorySelector = styled.div`
	div {
		display: flex;
		flex-direction: column;

		select {
			font-family: ${mixings.constants.FontFamily};

			option {
				font-family: ${mixings.constants.FontFamily};
			}
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
