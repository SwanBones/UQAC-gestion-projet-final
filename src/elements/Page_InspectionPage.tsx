import { Button, Flex, Radio, Table } from "antd";
import InspectionList from "./Table_InspectionList";
import {
	DownSquareOutlined,
	MinusSquareOutlined,
	PlusOutlined,
	UpSquareOutlined,
} from "@ant-design/icons";
import { SetStateAction, useState } from "react";
import CreateInspectionModal from "./Modal_CreateInspection";
import { BTPData, Inspection } from "../types";
import { SizeType } from "antd/es/config-provider/SizeContext";
import UpdateInspectionModal from "./Modal_UpdateInspection";

type InspectionPageProps = {
	items: BTPData[];
	setItems: React.Dispatch<React.SetStateAction<BTPData[]>>;
	page: string[];
	isHome: boolean;
};

const InspectionPage = (props: InspectionPageProps) => {
	const { items, setItems, page, isHome } = props;
	const [tableSize, setTableSize] = useState("large");
	const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
	const [updateModal, setUpdateModal] = useState<{
		isOpen: boolean;
		inspection: Inspection | null;
	}>({
		isOpen: false,
		inspection: null,
	});

	return (
		<div>
			<Flex justify="space-between">
				<Button
					type="primary"
					style={{ marginBottom: "1em" }}
					onClick={() => {
						setCreateModalIsOpen(true);
					}}
				>
					<PlusOutlined /> Ajouter Inspection
				</Button>
				<Radio.Group
					value={tableSize}
					onChange={(val) => setTableSize(val.target.value)}
				>
					<Radio.Button value="small">
						<UpSquareOutlined />
					</Radio.Button>
					<Radio.Button value="middle">
						<MinusSquareOutlined />
					</Radio.Button>
					<Radio.Button value="large">
						<DownSquareOutlined />
					</Radio.Button>
				</Radio.Group>
			</Flex>
			<CreateInspectionModal
				page={page}
				isModalOpen={createModalIsOpen}
				handleOk={function (): void {
					setCreateModalIsOpen(false);
				}}
				handleCancel={function (): void {
					setCreateModalIsOpen(false);
				}}
				items={items}
				setItems={setItems}
			/>
			<UpdateInspectionModal
				modal={updateModal}
				page={page}
				handleOk={function (): void {
					setUpdateModal({ isOpen: false, inspection: null });
				}}
				handleCancel={function (): void {
					setUpdateModal({ isOpen: false, inspection: null });
				}}
				items={items}
				setItems={setItems}
			/>
			<InspectionList
				setUpdateModal={setUpdateModal}
				tableSize={tableSize as SizeType}
				dataSource={isHome ? [] : items[Number(page[0])]?.dataSource}
			/>
		</div>
	);
};

export default InspectionPage;
