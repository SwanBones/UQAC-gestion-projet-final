import {
	Button,
	DatePicker,
	Dropdown,
	Flex,
	Form,
	FormProps,
	GetProp,
	Input,
	Modal,
	Select,
	Table,
	Upload,
	UploadFile,
	UploadProps,
} from "antd";
import InspectionList from "./Table_InspectionList";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { BTPData, Inspection } from "../types";
import dayjs from "dayjs";
import generateUUID from "../utils/uuidGenerator";

type UpdateInspectionModalProps = {
	page: string[];
	handleOk: () => void;
	handleCancel: () => void;
	items: BTPData[];
	setItems: React.Dispatch<React.SetStateAction<BTPData[]>>;
	modal: {
		isOpen: boolean;
		inspection: Inspection | null;
	};
};

const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e?.fileList;
};

const UpdateInspectionModal = (props: UpdateInspectionModalProps) => {
	const {
		page,
		handleOk,
		handleCancel: onCancel,
		setItems,
		items,
		modal,
	} = props;
	// const [file, setFile] = useState<UploadFile<any> | null>(null);
	const [form] = useForm();
	// const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const onFinish: FormProps<Inspection>["onFinish"] = (values) => {
		console.log("Success:", values);
	};
	useEffect(() => {
		if (modal.inspection != null) {
			form.setFieldValue("title", modal.inspection.title);
			form.setFieldValue("priority", modal.inspection.priority);
			form.setFieldValue("description", modal.inspection.description);
			form.setFieldValue("date", dayjs(modal.inspection.date));
			form.setFieldValue("status", modal.inspection.status);
		}
	}, [modal]);

	const onFinishFailed: FormProps<Inspection>["onFinishFailed"] = (
		errorInfo
	) => {
		console.log("Failed:", errorInfo);
	};
	type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

	const getBase64 = (file: FileType): Promise<string> =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = (error) => reject(error);
		});

	const handleSubmit = () => {
		// var isValid = true;
		form
			.validateFields()
			.then((data) => {
				console.log(data);
				const result: Inspection = form.getFieldsValue();
				//console.log(items);
				result.id = modal.inspection!.id;
				items[Number(page[0])].dataSource = items[
					Number(page[0])
				].dataSource.map((inspection) => {
					return inspection.id == result.id ? result : inspection;
				});
				setItems(items);
				form.resetFields();
				handleOk();
				setFileList([]);
			})
			.catch((e) => {});
		// constif (isValid) {
	};
	const handleCancel = () => {
		form.resetFields();
		onCancel();
		setFileList([]);
	};
	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as FileType);
		}

		setPreviewImage(file.url || (file.preview as string));
		//setPreviewOpen(true);
	};
	const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
		setFileList(newFileList);

	const uploadButton = (
		<button style={{ border: 0, background: "none" }} type="button">
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</button>
	);
	return (
		<Modal
			title="Mettre à jour une inspection"
			open={modal.isOpen}
			// onOk={handleSubmit}
			// okButtonProps={{ disabled: isValid }}
			onCancel={handleCancel}
			footer={[
				<Button onClick={handleCancel}>Annuler</Button>,
				<Button
					type="primary"
					form="myForm"
					key="submit"
					htmlType="submit"
					onClick={handleSubmit}
				>
					Soumettre
				</Button>,
			]}
			width={700}
		>
			{/* <Flex justify="center"> */}
			<Form
				form={form}
				name="basic"
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 100 }}
				style={{ maxWidth: 800 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item<Inspection>
					label="Titre"
					name="title"
					rules={[
						{
							required: true,
							message: "Veuillez ajouter un titre d'inspection",
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item<Inspection>
					label="Date"
					name="date"
					rules={[
						{
							required: true,
							message: "Veuillez ajouter une date",
						},
					]}
				>
					<DatePicker format={"DD/MM/YYYY"} />
				</Form.Item>

				<Form.Item<Inspection>
					label="Priorité"
					name="priority"
					rules={[{ required: true, message: "Veuillez ajouter une date" }]}
					initialValue={"3"}
				>
					<Select>
						<Select.Option value="1">Urgente</Select.Option>
						<Select.Option value="2">Haute</Select.Option>
						<Select.Option value="3">Moyenne</Select.Option>
						<Select.Option value="4">Basse</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item<Inspection>
					label="Description"
					name="description"
					rules={[
						{ required: true, message: "Veuillez ajouter une description" },
					]}
				>
					<TextArea rows={4} />
				</Form.Item>
				<Form.Item<Inspection>
					label="Statut"
					name="status"
					rules={[{ required: true, message: "Veuillez ajouter le statut" }]}
					initialValue={"signaled"}
				>
					<Select>
						<Select.Option value="signaled">Signalé</Select.Option>
						<Select.Option value="working">En cours</Select.Option>
						<Select.Option value="done">Fini</Select.Option>
						<Select.Option value="refused">Refusé</Select.Option>
					</Select>
				</Form.Item>
			</Form>
			{/* </Flex> */}
		</Modal>
	);
};

export default UpdateInspectionModal;
