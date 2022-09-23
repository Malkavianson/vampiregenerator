import * as Styled from "./styles";
import type { MenuProps } from "../../types/interfaces";
import { Home, LogOut } from "../../assets/icons";
import {
	NavigateFunction,
	useNavigate,
} from "react-router-dom";

const Menu = ({ path }: MenuProps): JSX.Element => {
	const navigate: NavigateFunction = useNavigate();
	return (
		<Styled.MenuContainer>
			<nav>
				<Styled.MenuItem active={path === "home"}>
					<Styled.MenuItemButton
						onClick={(): void => navigate("/")}
						active={path === "home"}
					>
						<Home />
					</Styled.MenuItemButton>
				</Styled.MenuItem>
				<Styled.MenuItem
					active={path === "profile"}
				>
					<Styled.MenuItemButton
						onClick={(): void =>
							navigate("/profile")
						}
						active={path === "profile"}
					></Styled.MenuItemButton>
				</Styled.MenuItem>
				<Styled.MenuItem
					active={path === "settings"}
				>
					<Styled.MenuItemButton
						onClick={(): void =>
							navigate("/settings")
						}
						active={path === "settings"}
					></Styled.MenuItemButton>
				</Styled.MenuItem>
			</nav>
			<Styled.MenuItem logout>
				<Styled.MenuItemButton>
					<LogOut />
				</Styled.MenuItemButton>
			</Styled.MenuItem>
		</Styled.MenuContainer>
	);
};

export default Menu;
