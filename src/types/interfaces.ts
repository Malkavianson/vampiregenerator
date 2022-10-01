import { Skill } from "./types";

export interface ApiKindred {
	id: string;
	kindredId: string;
	kindredCreation: number;
	image: string;
	name: string;
	player: string;
	clan: string;
	generation: number;
	attributes: string;
	abilities: string;
	advantages: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface Auth {
	token: string;
	user: CurrentUser;
}

export interface AxiosKindredData {
	name?: string;
	player?: string;
	clan?: string;
	generation?: number;
}

export interface CurrentUser {
	createdAt: string;
	email: string;
	id: string;
	name: string;
	updatedAt: string;
}

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
	path: "home" | "settings" | "profile" | "generate" | "login";
}

export interface MenuItemProps {
	logout?: boolean;
	active?: boolean;
}

export interface MenuItemButtonProps {
	active?: boolean;
}

export interface SkillSectionAttributeResponse {
	type: string;
	physical: SkillGroupResponse;
	social: SkillGroupResponse;
	mental: SkillGroupResponse;
}

export interface SkillSectionAbilitiesResponse {
	type: string;
	talents: SkillGroupResponse;
	skills: SkillGroupResponse;
	knowledges: SkillGroupResponse;
}
export interface SkillSectionAdvantagesResponse {
	type: string;
	disciplines: SkillGroupResponse;
	backgrounds: SkillGroupResponse;
	virtues: SkillGroupResponse;
}

export interface SkillGroupResponse {
	dataType: string;
	type: string;
	features: Skill[];
	stand?: number;
}

export interface Stats {
	attributes: SkillSectionAttributeResponse;
	abilities: SkillSectionAbilitiesResponse;
	advantages: SkillSectionAdvantagesResponse;
}

export interface SubTypeProp {
	subType: SkillGroupResponse;
}
