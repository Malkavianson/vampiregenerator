import { Assamite, Brujah, FollowersOfSet, Gangrel, Giovanni, LaSombra, Malkavian, Nosferatu, Ravnos, Toreador, Tremere, Tzimisce, Ventrue } from "../../assets/images/clans";
import { LoaderProps } from "../../types/interfaces";
import { KindredRoullete } from "./styles";

const Loader = ({ animated }: LoaderProps): JSX.Element => {
	return (
		<KindredRoullete animated={animated}>
			<Brujah />
			<Gangrel />
			<Malkavian />
			<Nosferatu />
			<Toreador />
			<Tremere />
			<Ventrue />
			<LaSombra />
			<Tzimisce />
			<Assamite />
			<FollowersOfSet />
			<Giovanni />
			<Ravnos />
		</KindredRoullete>
	);
};

export default Loader;
