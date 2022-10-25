import { useFavorites } from "../../contexts/Favorites.context";
import { useKindred } from "../../contexts/Kindreds.context";
import { useAuth } from "../../contexts/Account.context";
import { Container, ContentContainer } from "../styles";
import TitleContent from "src/components/TitleContent";
import Autoscroll from "../../components/AutoScroll";
import Kindreds from "../../components/Kindreds";
import OrderNav from "../../components/OrderNav";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
import { HomeContentCards } from "./styles";
import Menu from "../../components/Menu";

const Home = (): JSX.Element => {
	const { endOfPage, currentPage, setCurrentPage, handleGetServerStatus } = useKindred();
	const { handleGetFavorites } = useFavorites();
	const { logged } = useAuth();

	const [scrollPage, setScrollPage] = useState(false);

	const target = document.querySelector("#autoscrolldiv");
	const options = {
		root: document.querySelector("#autoscrollArea"),
		rootMargin: "0px",
		threshold: 1.0,
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const callback = (entries: any[]): void => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		entries.forEach((entry: any) => {
			setScrollPage(entry.isIntersecting);
		});
	};
	const observer = new IntersectionObserver(callback, options);

	if (target) {
		requestIdleCallback(() => observer.observe(target), { timeout: 3000 });
	}

	useEffect(() => {
		if (scrollPage) setCurrentPage(currentPage + 1);
	}, [scrollPage]);

	useEffect(() => {
		handleGetServerStatus();
		if (logged) handleGetFavorites();
	}, [logged]);

	return (
		<Container>
			<Menu path="home" />
			<ContentContainer>
				<TitleContent>
					<h2>Welcome to the domain of Kindreds</h2>
				</TitleContent>
				<OrderNav />
				<HomeContentCards id="autoscrollArea">
					<Kindreds />
					<Autoscroll />
					<Loader animated={!endOfPage} />
				</HomeContentCards>
			</ContentContainer>
		</Container>
	);
};

export default Home;
