import { Assamite, Brujah, FollowersOfSet, Gangrel, Giovanni, LaSombra, Malkavian, Nosferatu, Ravnos, Toreador, Tremere, Tzimisce, Ventrue } from "../../assets/images/clans";
import { KindredRoullete } from "./styles";

const Loader = (): JSX.Element => {
	return (
		<KindredRoullete>
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
