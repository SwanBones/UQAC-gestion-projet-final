import { Table, Tag } from "antd";
import { Inspection } from "../types";
import { render } from "@testing-library/react";
import dayjs from "dayjs";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { SetStateAction } from "react";

type InspectionListProps = {
	tableSize: SizeType;
	dataSource: Inspection[];
	setUpdateModal: React.Dispatch<
		SetStateAction<{
			isOpen: boolean;
			inspection: Inspection | null;
		}>
	>;
};
const status2Color = (status: string) => {
	var res;
	switch (status) {
		case "signaled":
			res = "default";
			break;
		case "working":
			res = "orange";
			break;
		case "done":
			res = "green";
			break;
		case "refused":
			res = "red";
			break;
	}
	return res;
};
const status2French = (status: string) => {
	var res;
	switch (status) {
		case "signaled":
			res = "Signalé";
			break;
		case "working":
			res = "En cours";
			break;
		case "done":
			res = "Fini";
			break;
		case "refused":
			res = "Refusé";
			break;
	}
	return res;
};
const priority2French = (status: string) => {
	var res;
	switch (status) {
		case "1":
			res = "Urgente";
			break;
		case "2":
			res = "Haute";
			break;
		case "3":
			res = "Moyenne";
			break;
		case "4":
			res = "Basse";
			break;
	}
	return res;
};

const columns = [
	{
		title: "Titre",
		dataIndex: "title",
		key: "title",
		render: (title: string) => {
			return <p style={{ fontWeight: "bold", margin: 0 }}>{title}</p>;
		},
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
		render: (date: string) => {
			return dayjs(date).format("DD/MM/YYYY");
		},
	},
	{
		title: "Priorité",
		dataIndex: "priority",
		key: "priority",
		render: (priority: string) => {
			return priority2French(priority);
		},
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
		render: (status: string) => {
			return <Tag color={status2Color(status)}>{status2French(status)}</Tag>;
		},
	},
	{
		title: "id",
		dataIndex: "id",
		key: "id",
		hidden: true,
	},
];

const InspectionList = (props: InspectionListProps) => {
	const { setUpdateModal, dataSource, tableSize } = props;
	return (
		<Table
			size={tableSize}
			columns={columns}
			dataSource={dataSource}
			onRow={(record, rowIndex) => {
				return {
					onClick: (event) => {
						setUpdateModal({ isOpen: true, inspection: record });
					},
				};
			}}
			rowClassName="table-row"
		></Table>
	);
};

export default InspectionList;
