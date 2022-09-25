import type { MenuProps } from "../../types/interfaces";
import { Bite, Home, LogOut, Settings } from "../../assets/icons";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { MenuContainer, MenuItem, MenuItemButton } from "./styles";

const Menu = ({ path }: MenuProps): JSX.Element => {
	const navigate: NavigateFunction = useNavigate();
	return (
		<MenuContainer>
			<nav>
				<MenuItem active={path === "home"}>
					<MenuItemButton
						onClick={(): void => navigate("/")}
						active={path === "home"}
					>
						<Home />
					</MenuItemButton>
				</MenuItem>
				<MenuItem active={path === "generate"}>
					<MenuItemButton
						onClick={(): void => navigate("/generate")}
						active={path === "generate"}
					>
						<Bite />
					</MenuItemButton>
				</MenuItem>
				<MenuItem active={path === "profile"}>
					<MenuItemButton
						onClick={(): void => navigate("/profile")}
						active={path === "profile"}
					></MenuItemButton>
				</MenuItem>
				<MenuItem active={path === "settings"}>
					<MenuItemButton
						onClick={(): void => navigate("/settings")}
						active={path === "settings"}
					>
						<Settings />
					</MenuItemButton>
				</MenuItem>
			</nav>
			<MenuItem logout>
				<MenuItemButton>
					<LogOut />
				</MenuItemButton>
			</MenuItem>
		</MenuContainer>
	);
};

export default Menu;
