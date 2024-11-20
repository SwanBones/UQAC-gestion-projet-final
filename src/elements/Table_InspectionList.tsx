import { Table } from "antd";
import { Inspection } from "../types";

type InspectionListProps = {
	dataSource: Inspection[];
};

const columns = [
	{
		title: "Titre",
		dataIndex: "title",
		key: "title",
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
	},
	{
		title: "Priorité",
		dataIndex: "priority",
		key: "priority",
	},
	{
		title: "Description",
		dataIndex: "description",
		key: "description",
	},
	{
		title: "Statut",
		dataIndex: "status",
		key: "status",
	},
	{
		title: "id",
		dataIndex: "id",
		key: "id",
	},
];

const InspectionList = (props: InspectionListProps) => {
	const { dataSource } = props;
	return <Table columns={columns} dataSource={dataSource}></Table>;
};

export default InspectionList;
