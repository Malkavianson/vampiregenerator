export interface CssColors {
	primaryColor: string;
	secondaryColor: string;
	primaryColorOpacity: string;
	shadowColor: string;
	baseBg1: string;
	baseBg2: string;
	baseForm: string;
	baseLine: string;
	textColor: string;
	textLighter: string;
	textLight: string;
	textNeutral: string;
	textDark: string;
}

export interface CssConstants {
	FontFamily: string;
	logoFontSize: string;
	logoLineHeight: string;
	headingFontSize: string;
	headingLineHeight: string;
	bodyFontSize: string;
	bodyLineHeight: string;
}

export interface MenuProps {
	path: "home" | "settings" | "profile";
}

export interface MenuItemProps {
	logout?: boolean;
	active?: boolean;
}

export interface MenuItemButtonProps {
	active?: boolean;
}
