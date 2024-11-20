import { Inspection } from "../types";

const data_hospital: Inspection[] = [
	{
		title: "Inspection des fondations",
		date: "2024-11-19T10:15:00Z",
		priority: "2",
		description:
			"Les fondations montrent des fissures nécessitant une réparation rapide.",
		status: "done",
		id: "4e7c9b0d-9e47-43d4-9313-f5e42a27ef6e",
	},
	{
		title: "Vérification de l'électricité",
		date: "2024-11-19T08:30:00Z",
		priority: "3",
		description:
			"Certains câbles ne respectent pas les normes de sécurité actuelles.",
		status: "working",
		id: "3a56c72e-b1cd-42b8-90d3-2c91f4c57d92",
	},
	{
		title: "Contrôle des murs extérieurs",
		date: "2024-11-18T14:45:00Z",
		priority: "4",
		description:
			"L’enduit extérieur est mal appliqué à plusieurs endroits critiques.",
		status: "signaled",
		id: "96df037a-80e4-46ed-bcf9-b1622383bcf7",
	},
	{
		title: "Inspection des plafonds",
		date: "2024-11-17T11:20:00Z",
		priority: "2",
		description:
			"Des fissures ont été observées sur plusieurs dalles du plafond.",
		status: "done",
		id: "d9f7415f-df3e-47c5-8f83-e3a7bdbd3fda",
	},
	{
		title: "Examen des fenêtres",
		date: "2024-11-16T09:50:00Z",
		priority: "3",
		description: "Les joints de plusieurs fenêtres semblent mal installés.",
		status: "working",
		id: "58ac3f38-66c1-4237-b3b8-ef798a84eac4",
	},
	{
		title: "Évaluation des ascenseurs",
		date: "2024-11-15T16:10:00Z",
		priority: "2",
		description:
			"Un ascenseur présente un dysfonctionnement mécanique inquiétant.",
		status: "done",
		id: "87050d56-25a7-4ae4-b93f-8b205065e040",
	},
	{
		title: "Contrôle des peintures murales",
		date: "2024-11-14T12:00:00Z",
		priority: "4",
		description: "La peinture s’écaille dans plusieurs salles de consultation.",
		status: "signaled",
		id: "650a3179-c8d5-4d8d-bbd8-cb62a0d5cc9f",
	},
	{
		title: "Inspection des systèmes d'évacuation",
		date: "2024-11-13T13:25:00Z",
		priority: "2",
		description:
			"Les conduits d’évacuation des eaux sont partiellement obstrués.",
		status: "working",
		id: "ff21b5ae-3124-4bcf-b17e-671e95d13439",
	},
	{
		title: "Analyse des structures en béton",
		date: "2024-11-12T15:35:00Z",
		priority: "2",
		description: "Le béton présente des signes d’affaissement inquiétants.",
		status: "done",
		id: "8a561f17-55b7-4b83-b0c4-bf8ed257645d",
	},
	{
		title: "Vérification des portes coupe-feu",
		date: "2024-11-11T10:15:00Z",
		priority: "3",
		description:
			"Plusieurs portes ne se ferment pas correctement sous pression.",
		status: "signaled",
		id: "a1c56dbe-f23a-4209-bdc2-69d2325e8db0",
	},
	{
		title: "Examen des réseaux de ventilation",
		date: "2024-11-10T09:45:00Z",
		priority: "2",
		description:
			"Une mauvaise circulation d’air est observée dans plusieurs zones.",
		status: "working",
		id: "2ff4c7d3-915c-49b3-97d5-9a6578d347dc",
	},
	{
		title: "Contrôle des sols",
		date: "2024-11-09T11:30:00Z",
		priority: "4",
		description:
			"Des irrégularités dans le sol pourraient causer des accidents.",
		status: "done",
		id: "e9f2d211-ea92-4bb4-8b2b-02b7284739db",
	},
	{
		title: "Inspection des conduites d’eau",
		date: "2024-11-08T14:50:00Z",
		priority: "2",
		description:
			"Des fuites ont été détectées dans plusieurs tuyaux importants.",
		status: "signaled",
		id: "7247d0d1-03b3-40f3-bdb7-2d3a4d1d914c",
	},
	{
		title: "Évaluation des luminaires",
		date: "2024-11-07T13:00:00Z",
		priority: "3",
		description: "Certains luminaires ne fonctionnent pas correctement.",
		status: "working",
		id: "b3be9d90-ef62-4b92-b6d7-b76912062148",
	},
	{
		title: "Inspection des espaces de stockage",
		date: "2024-11-06T16:20:00Z",
		priority: "4",
		description: "Le stockage ne respecte pas les normes anti-incendie.",
		status: "done",
		id: "2a6eb9b6-1f0e-41b8-b1de-45f3c6c53de7",
	},
	{
		title: "Contrôle des accès sécurisés",
		date: "2024-11-05T10:40:00Z",
		priority: "2",
		description: "Les accès sécurisés ne répondent pas aux exigences.",
		status: "signaled",
		id: "2f0c5f26-dcfc-42d9-9419-b47cc73840d6",
	},
	{
		title: "Examen des équipements sanitaires",
		date: "2024-11-04T09:15:00Z",
		priority: "3",
		description: "Des toilettes montrent des défauts de plomberie critiques.",
		status: "working",
		id: "f2e8f49a-476c-4674-bb3f-6f54fbb06224",
	},
	{
		title: "Vérification des escaliers",
		date: "2024-11-03T14:10:00Z",
		priority: "4",
		description:
			"Des marches cassées ont été identifiées dans certaines cages.",
		status: "done",
		id: "05f94b27-d4a7-4455-bfae-79c27d46f4a1",
	},
	{
		title: "Contrôle des systèmes d'alarme",
		date: "2024-11-02T12:55:00Z",
		priority: "2",
		description:
			"Certains détecteurs d’incendie ne fonctionnent pas correctement.",
		status: "working",
		id: "8df8cd83-2a04-4740-b5c8-e64c97d90dfc",
	},
	{
		title: "Examen des parkings souterrains",
		date: "2024-11-01T11:45:00Z",
		priority: "3",
		description: "La ventilation des parkings ne semble pas suffisante.",
		status: "signaled",
		id: "fe2d4161-6750-41dc-8f37-235762a972df",
	},
];

const data_zoo: Inspection[] = [
	{
		title: "Inspection des enclos des félins",
		date: "2024-11-19T10:00:00Z",
		priority: "2",
		description:
			"Les grillages ne respectent pas les normes de sécurité en vigueur.",
		status: "working",
		id: "c3d4b7f9-9c67-4b1e-85e5-34e7f5c4d913",
	},
	{
		title: "Vérification des bassins aquatiques",
		date: "2024-11-19T14:30:00Z",
		priority: "3",
		description:
			"Les systèmes de filtration présentent des défauts techniques.",
		status: "signaled",
		id: "d172e303-3c5e-42db-8820-37f2a893de3c",
	},
	{
		title: "Contrôle des clôtures électriques",
		date: "2024-11-18T11:45:00Z",
		priority: "2",
		description: "Une section de clôture n’est pas correctement alimentée.",
		status: "done",
		id: "7a67b7e4-5f34-494d-9371-4130e9c8d5d3",
	},
	{
		title: "Examen des espaces pour primates",
		date: "2024-11-17T15:20:00Z",
		priority: "3",
		description: "Le système d’escalade semble instable et dangereux.",
		status: "working",
		id: "e3c6f2bb-4b32-4a4e-9354-3d273643098d",
	},
	{
		title: "Inspection des bâtiments pour visiteurs",
		date: "2024-11-16T10:10:00Z",
		priority: "4",
		description:
			"Des fissures sont visibles sur les murs extérieurs du bâtiment.",
		status: "done",
		id: "14fdcd4e-7fb9-44b7-8bc3-9d8f3b442e4d",
	},
	{
		title: "Analyse des infrastructures pour oiseaux",
		date: "2024-11-15T13:50:00Z",
		priority: "2",
		description:
			"Des ouvertures dans les volières pourraient permettre une évasion.",
		status: "signaled",
		id: "cb52eb7d-1871-49e8-b46e-830732987f57",
	},
	{
		title: "Contrôle des zones de safari",
		date: "2024-11-14T09:30:00Z",
		priority: "3",
		description: "Les routes de safari sont mal nivelées et dangereuses.",
		status: "working",
		id: "aae7db9f-89e7-496e-b0c9-9c8d676e2a0d",
	},
	{
		title: "Évaluation des systèmes de drainage",
		date: "2024-11-13T12:15:00Z",
		priority: "2",
		description:
			"Le drainage des enclos est insuffisant pour gérer les pluies.",
		status: "done",
		id: "7d62ef1e-5a2c-4414-a758-5e44d6379b37",
	},
	{
		title: "Inspection des zones alimentaires",
		date: "2024-11-12T14:00:00Z",
		priority: "4",
		description: "Les zones de stockage alimentaire ne sont pas ventilées.",
		status: "signaled",
		id: "83a64c6b-25b9-4b68-bb2f-0c2d23cfd689",
	},
	{
		title: "Vérification des systèmes de sécurité",
		date: "2024-11-11T16:45:00Z",
		priority: "2",
		description: "Les caméras ne couvrent pas toutes les zones sensibles.",
		status: "working",
		id: "bf914cdf-49ff-4c0c-bae7-99b4bbd578d7",
	},
];
const data_library: Inspection[] = [
	{
		title: "Inspection des étagères principales",
		date: "2024-11-19T09:30:00Z",
		priority: "2",
		description: "Certaines étagères ne sont pas correctement fixées au mur.",
		status: "working",
		id: "c8a2d09b-6fb5-45c8-bdcb-ef3c64e5927a",
	},
	{
		title: "Vérification du système de climatisation",
		date: "2024-11-19T11:00:00Z",
		priority: "3",
		description:
			"La climatisation ne couvre pas uniformément toutes les sections.",
		status: "done",
		id: "a5e1837a-e033-4791-82e3-2263f684a57d",
	},
	{
		title: "Contrôle des câblages électriques",
		date: "2024-11-18T15:15:00Z",
		priority: "2",
		description:
			"Certains câblages sont exposés, ce qui pose un risque de sécurité.",
		status: "signaled",
		id: "f1b21b6d-f3ae-4a7e-bcf4-bfa80b2a8502",
	},
	{
		title: "Inspection des espaces de lecture",
		date: "2024-11-17T14:00:00Z",
		priority: "3",
		description:
			"Les tables de lecture présentent des finitions inégales et dangereuses.",
		status: "working",
		id: "d45bfbc2-034e-48b1-9600-3bdb283a8c24",
	},
	{
		title: "Vérification des portes coupe-feu",
		date: "2024-11-16T10:45:00Z",
		priority: "2",
		description:
			"Les portes coupe-feu ne ferment pas correctement sous pression.",
		status: "signaled",
		id: "e12ebfb2-b5a7-4e36-81ec-b23439f0d795",
	},
	{
		title: "Contrôle des systèmes d’éclairage",
		date: "2024-11-15T16:30:00Z",
		priority: "4",
		description:
			"Certaines zones sont insuffisamment éclairées, créant des ombres gênantes.",
		status: "done",
		id: "b3a6c1f4-7c85-4adf-b6e5-3e5f7d3c5ae6",
	},
	{
		title: "Inspection de l’escalier principal",
		date: "2024-11-14T13:15:00Z",
		priority: "2",
		description: "Les rampes de l’escalier sont instables et mal fixées.",
		status: "working",
		id: "bf7dcf38-c1e5-4e7b-83b6-67fdcf70d6b9",
	},
	{
		title: "Vérification des salles de réunion",
		date: "2024-11-13T10:10:00Z",
		priority: "3",
		description: "Le système d’insonorisation des salles est insuffisant.",
		status: "done",
		id: "edf9d28b-b26a-438b-b50f-f534e66bc961",
	},
	{
		title: "Analyse des accès pour personnes handicapées",
		date: "2024-11-12T14:50:00Z",
		priority: "2",
		description:
			"Les rampes d’accès ne respectent pas les normes d’inclinaison.",
		status: "signaled",
		id: "8b6a2e07-810b-4e1d-a785-3bc41b6fcaa3",
	},
	{
		title: "Inspection du système d’alarme incendie",
		date: "2024-11-11T12:20:00Z",
		priority: "2",
		description: "Certains détecteurs ne répondent pas aux tests de sécurité.",
		status: "working",
		id: "a1e2673f-fb64-4a18-9505-4db22e5c3176",
	},
	{
		title: "Contrôle des sols dans les archives",
		date: "2024-11-10T09:40:00Z",
		priority: "4",
		description: "Le sol des archives est irrégulier et dangereux.",
		status: "done",
		id: "c5a8b12e-9408-4639-9f98-92dbb0146584",
	},
	{
		title: "Vérification des espaces pour ordinateurs",
		date: "2024-11-09T11:30:00Z",
		priority: "3",
		description: "Des prises électriques sont absentes ou mal positionnées.",
		status: "signaled",
		id: "d7a91463-b2af-48ab-8f87-7439c92f3b72",
	},
];

export default { data_hospital, data_zoo, data_library };
