import { FireOutlined } from "@ant-design/icons";
import { Flex } from "antd";

const HomePage = () => {
	return (
		<div>
			<Flex justify="center">
				<div>
					<FireOutlined
						style={{
							margin: 10,
							padding: 0,
							fontSize: "6em",
							color: "orange",
							marginLeft: 25,
						}}
					/>

					<h1 style={{ marginRight: 60 }}>InspectBTP</h1>
				</div>
			</Flex>
			<p className="paragraph">
				InspectBTP est un outil qui permet de faciliter l’inspection des
				chantiers de construction, en facilitant la signalisation des défauts et
				le manque de respect des réglementations. Les utilisateurs concernés par
				ce qu’offre cette application sont principalement du secteur du BTP.
				L’inspecteur, sur place avec un appareil électronique (ordinateur, iPad,
				téléphone portable…), prend une photo de la chose à inspecter, décrit le
				problème et l’envoie à ses supérieurs. Ceux-ci verront apparaître des
				nouvelles inspections dans leur liste et effectuer une décision à partir
				de ces nouvelles informations. La plus grande valeur ajoutée du produit
				se trouve dans la rapidité de la transmission des informations. En
				remplaçant le papier, les problèmes de lecture d’écriture, traitement
				des information, et la perte des documents cessent d’être un problème.
				En plus de celà, les parties prenantes qui reçoivent les inspections le
				reçoivent en direct, et peuvent immédiatement commencer leur travail.
				Celà allège aussi l’inspecteur, qui n’a besoin que de se soucier
				d’utiliser l’interface qui est conçue d’être facile à utiliser pour les
				plus débutants. L’outil permet de respecter davantage les certifications
				du chantier en termes de sécurité et de respect des lois locales.
			</p>
		</div>
	);
};

export default HomePage;
