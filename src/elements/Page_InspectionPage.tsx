import { Button, Flex, Radio, Table } from "antd";
import InspectionList from "./Table_InspectionList";
import {
	DownSquareOutlined,
	MinusSquareOutlined,
	PlusOutlined,
	UpSquareOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import CreateInspectionModal from "./Modal_CreateInspection";
import { BTPData } from "../types";
import { SizeType } from "antd/es/config-provider/SizeContext";

type InspectionPageProps = {
	items: BTPData[];
	setItems: React.Dispatch<React.SetStateAction<BTPData[]>>;
	page: string[];
	isHome: boolean;
};

const InspectionPage = (props: InspectionPageProps) => {
	const { items, setItems, page, isHome } = props;
	const [tableSize, setTableSize] = useState("large");
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div>
			<Flex justify="space-between">
				<Button
					type="primary"
					style={{ marginBottom: "1em" }}
					onClick={() => {
						setModalIsOpen(true);
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
				isModalOpen={modalIsOpen}
				handleOk={function (): void {
					setModalIsOpen(false);
				}}
				handleCancel={function (): void {
					setModalIsOpen(false);
				}}
				items={items}
				setItems={setItems}
			/>
			<InspectionList
				tableSize={tableSize as SizeType}
				dataSource={isHome ? [] : items[Number(page[0])]?.dataSource}
			/>
		</div>
	);
};

export default InspectionPage;
