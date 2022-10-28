// import { useAuth } from "../../contexts/Account.context";
import { CampaignsArticle, CampaignsArticleHeader, CampaignsRoom } from "./styles";
import { Arrow } from "../../assets/icons";
// import { useEffect } from "react";

const Campaigns = (): JSX.Element => {
	// const { logged } = useAuth();

	// useEffect(() => {
	// }, []);
	return (
		<CampaignsRoom>
			<CampaignsArticle>
				<CampaignsArticleHeader>
					menu <Arrow />
				</CampaignsArticleHeader>
				<button>criar nova campanha</button>
				<button>editar campanha</button>
				<button>deletar campanha</button>
			</CampaignsArticle>
			<CampaignsArticle>
				<CampaignsArticleHeader>
					atual <Arrow />
				</CampaignsArticleHeader>
				<div>mostrar players</div>
				<div>mostrar infos da campaha</div>
				<div>adicionar players por id</div>
			</CampaignsArticle>
			<CampaignsArticle>
				<CampaignsArticleHeader>
					campanhas <Arrow />
				</CampaignsArticleHeader>
				<div>campanhas próprias</div>
				<div>campanhas participa</div>
				<div>resto das campanhas</div>
			</CampaignsArticle>
		</CampaignsRoom>
	);
};

export default Campaigns;
