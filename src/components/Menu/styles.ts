import { MenuItemButtonProps, MenuItemProps } from "../../types/interfaces";
import styled, { css, Interpolation } from "styled-components";

export const MenuContainer = styled.div`
	width: 15vw;
	max-width: 15rem;
	height: 100vh;
	border-radius: 1rem;
	background-color: #44475acc;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	nav {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
`;

export const MenuItem = styled.div<MenuItemProps>`
	width: calc(100% - 0.8rem);
	aspect-ratio: 1;
	margin-left: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #44475a;
	border-radius: 0.8rem 0 0 0.8rem;

	${({ logout }): Interpolation<MenuItemProps> =>
		logout &&
		css`
			position: absolute;
			bottom: 0;
			width: calc(15vw - 0.8rem);
			max-width: calc(15rem - 0.8rem);
			border-radius: 0.8rem 0 0 0.8rem;
		`}

	${({ active }): Interpolation<MenuItemProps> =>
		active &&
		css`
			background-color: #bd93f9cc;
		`}
`;

export const MenuItemButton = styled.button<MenuItemButtonProps>`
	width: 75%;
	aspect-ratio: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 0.75rem;
	background-color: #bd93f9cc;
	border-radius: 0.5rem;
	color: #6cea69;
	cursor: pointer;

	:hover {
		transform: scale(1.1);
		svg {
			path#VampireMouthBlood,
			path#VampireEyes,
			path#VampireMouth {
				fill: #800000;
			}
		}
	}

	${({ active }): Interpolation<MenuItemProps> =>
		active &&
		css`
			background-color: #ff5555;
			color: #ffffff;
		`}
`;
