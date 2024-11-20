import React, { useState } from "react";
import "./App.css";
import { Breadcrumb, Button, Layout, Menu, MenuProps } from "antd";
import {
	AuditOutlined,
	HomeOutlined,
	SnippetsOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

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

const menuItem = (input: string) => {
	var result: string;
	switch (input) {
		case "home":
			result = "Home";
			break;
		case "lists":
			result = "Listes d'inspection";
			break;
		case "hospital":
			result = "Construction Hopital";
			break;
		case "library":
			result = "Rénovation Bibliotheque";
			break;
		case "zoo":
			result = "Construction Zoo";
			break;
		default:
			result = "";
			break;
	}
	return result;
};
const items: MenuItem[] = [
	getItem("Home", "home", <HomeOutlined />),
	getItem("Listes d'inspections", "lists", <AuditOutlined />, [
		getItem("Construction Hopital", "hospital"),
		getItem("Rénovation Bibliotheque", "library"),
		getItem("Construction Zoo", "zoo"),
	]),
];

function App() {
	const [collapsed, setCollapsed] = useState(false);
	const [page, setPage] = useState<string[]>([]);
	// const {
	//   token: { colorBgContainer, borderRadiusLG },
	// } = theme.useToken();

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
					items={items}
				/>
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: "#000C17" }} />
				<Content style={{ margin: "0 16px" }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>
							{page[0] == "home" ? "Home" : "Inspections"}
						</Breadcrumb.Item>
						{page[0] != "home" && (
							<Breadcrumb.Item>{menuItem(page[0])}</Breadcrumb.Item>
						)}
					</Breadcrumb>
					<h1>Inspections</h1>

					<div
						style={{
							color: "black",
							padding: 24,
							minHeight: 360,
							background: "#fff",
							borderRadius: 20,
						}}
					>
						<p>kk</p>pages here. switch case
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
