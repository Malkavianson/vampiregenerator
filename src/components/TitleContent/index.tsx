import { ContentHeader, ContentHeaderTitle } from "./styles";
import { Title } from "../../assets/icons";
import { ReactNode } from "react";

const TitleContent = ({ children }: { children: ReactNode }): JSX.Element => {
	return (
		<ContentHeader>
			<div>
				<ContentHeaderTitle>
					<Title />
				</ContentHeaderTitle>
				{children}
			</div>
		</ContentHeader>
	);
};

export default TitleContent;
