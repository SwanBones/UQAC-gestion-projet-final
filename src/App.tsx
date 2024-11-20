import React, { useEffect, useState } from "react";
import "./App.css";
import {
	Breadcrumb,
	Button,
	Input,
	Layout,
	Menu,
	MenuProps,
	Popconfirm,
} from "antd";
import {
	AuditOutlined,
	HomeOutlined,
	PlusOutlined,
	SnippetsOutlined,
} from "@ant-design/icons";
// import { writeFileSync } from "fs";
import dataSource from "./utils/dataSources";
import InspectionList from "./elements/Table_InspectionList";
import InspectionPage from "./elements/Page_InspectionPage";
import { BTPData } from "./types";
import HomePage from "./elements/Page_Home";
const { Header, Content, Footer, Sider } = Layout;
const { data_hospital, data_library, data_zoo } = dataSource;
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

function App() {
	const [collapsed, setCollapsed] = useState(false);
	const [page, setPage] = useState<string[]>(["home"]);
	const [isHome, setIsHome] = useState(true);
	const [newListName, setNewListName] = useState<string>("");

	const [items, setItems] = useState<BTPData[]>([
		{
			name: "Construction Hopital",
			dataSource: data_hospital,
		},
		{
			name: "Rénovation Bibliotheque",
			dataSource: data_library,
		},
		{
			name: "Construction Zoo",
			dataSource: data_zoo,
		},
	]);
	useEffect(() => {
		setIsHome(page[0] == "home" && page.length == 1);
	}, [page]);
	const [additionalItems, setAdditionalItems] = useState([]);
	const [menuItems, setMenuItems] = useState([
		getItem("Accueil", "home", <HomeOutlined />),
		getItem(
			"Listes d'inspections",
			"lists",
			<AuditOutlined />,
			items.map((item, index) => getItem(item.name, index))
		),
	]);
	useEffect(() => {
		setMenuItems([
			getItem("Accueil", "home", <HomeOutlined />),
			getItem(
				"Listes d'inspections",
				"lists",
				<AuditOutlined />,
				items.map((item, index) => getItem(item.name, index))
			),
		]);
	}, [items]);
	const onAddListConfirm = () => {
		setItems([...items, { name: newListName, dataSource: [] }]);
		setPage([items.length.toString(), "inspection"]);
	};
	// const {
	//   token: { colorBgContainer, borderRadiusLG },
	// } = theme.useToken();
	const newListForm = (
		<Input
			value={newListName}
			onChange={(e) => {
				setNewListName(e.target.value);
			}}
		/>
	);
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
				width={300}
			>
				<h1 style={{ color: "white", padding: 10, paddingLeft: 30 }}>
					<SnippetsOutlined style={{ marginRight: "1em" }} />
					{!collapsed && "Heratech InspectBTP"}
				</h1>
				<div className="demo-logo-vertical" />
				<Menu
					selectedKeys={page}
					onClick={(info) => {
						setPage(info.keyPath);
					}}
					theme="dark"
					defaultSelectedKeys={["1"]}
					mode="inline"
					items={menuItems}
				/>
				<Popconfirm
					placement="right"
					title={"Nom de la liste"}
					description={newListForm}
					onOpenChange={() => {
						setNewListName("");
					}}
					onConfirm={onAddListConfirm}
					okText="Ajouter"
					cancelText="Annuler"
					icon={false}
				>
					<Button
						style={{
							color: "white",
							backgroundColor: "#001529",
							borderRadius: "10px",
							padding: "1em",
							margin: "1em",
						}}
						id="add-list"
					>
						<PlusOutlined />
						{!collapsed && <p style={{ marginLeft: "10px" }}>Ajouter Liste</p>}
					</Button>
				</Popconfirm>
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: "#000C17" }} />
				<Content style={{ margin: "0 16px" }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>
							{isHome ? "Accueil" : "Inspections"}
						</Breadcrumb.Item>
						{!isHome && (
							<Breadcrumb.Item>{items[Number(page[0])]?.name}</Breadcrumb.Item>
						)}
					</Breadcrumb>
					<h1>{isHome ? "Accueil" : items[Number(page[0])]?.name}</h1>
					{/* <Button
						onClick={() => {
							console.log();
						}}
					>
						heiwew
					</Button> */}
					<div
						style={{
							color: "black",
							padding: 24,
							minHeight: 360,
							background: "#fff",
							borderRadius: 20,
						}}
					>
						{isHome ? (
							<HomePage />
						) : (
							<InspectionPage
								isHome={isHome}
								items={items}
								setItems={setItems}
								page={page}
							/>
						)}
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Heratech ©{new Date().getFullYear()} Groupe 15
				</Footer>
			</Layout>
		</Layout>
	);
}

export default App;
