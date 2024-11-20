import { Button, Table } from "antd";
import InspectionList from "./Table_InspectionList";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import CreateInspectionModal from "./Modal_CreateInspection";
import { BTPData } from "../types";

type InspectionPageProps = {
	items: BTPData[];
	setItems: React.Dispatch<React.SetStateAction<BTPData[]>>;
	page: string[];
};

const InspectionPage = (props: InspectionPageProps) => {
	const { items } = props;

	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div>
			<Button
				type="primary"
				style={{ marginBottom: "1em" }}
				onClick={() => {
					setModalIsOpen(true);
				}}
			>
				<PlusOutlined /> Ajouter Inspection
			</Button>
			<CreateInspectionModal
				isModalOpen={modalIsOpen}
				handleOk={function (): void {
					setModalIsOpen(false);
				}}
				handleCancel={function (): void {
					setModalIsOpen(false);
				}}
			/>
			<InspectionList dataSource={[]} />
		</div>
	);
};

export default InspectionPage;
