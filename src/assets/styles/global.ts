import {
	createGlobalStyle,
	DefaultTheme,
	GlobalStyleComponent,
	ThemeProps,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<
	ThemeProps<DefaultTheme>,
	DefaultTheme
> = createGlobalStyle`
	body {
	    margin: 0;
	    padding: 0;
		box-sizing: border-box;
		font-family: 'Modern Antiqua', cursive;
		font-weight: 400;
	}
`;

export default GlobalStyle;
