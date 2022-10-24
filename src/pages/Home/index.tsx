import { Container, ContentContainer, ContentHeader } from "../styles";
import { HomeContentCards, HomeContentHeaderTitle } from "./styles";
import { useKindred } from "../../contexts/kindreds.contexts";
import Autoscroll from "../../components/AutoScroll";
import Kindreds from "../../components/Kindreds";
import OrderNav from "../../components/OrderNav";
import { useEffect, useState } from "react";
import { Title } from "../../assets/icons";
import Menu from "../../components/Menu";

const Home = (): JSX.Element => {
	const { currentPage, setCurrentPage } = useKindred();
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
		requestIdleCallback(() => observer.observe(target), { timeout: 5000 });
	}

	useEffect(() => {
		if (scrollPage) setCurrentPage(currentPage + 1);
	}, [scrollPage]);

	return (
		<Container>
			<Menu path="home" />
			<ContentContainer>
				<ContentHeader>
					<div>
						<HomeContentHeaderTitle>
							<Title />
						</HomeContentHeaderTitle>
						<h2>Welcome to the domain of Kindreds</h2>
					</div>
				</ContentHeader>
				<OrderNav />
				<HomeContentCards id="autoscrollArea">
					<Kindreds />
					<Autoscroll />;
				</HomeContentCards>
			</ContentContainer>
		</Container>
	);
};

export default Home;
