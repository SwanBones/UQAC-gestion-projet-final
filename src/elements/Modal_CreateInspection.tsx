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

type CreateInspectionModalProps = {
	isModalOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
};
type FieldType = {
	title: string;
	date: string;
	priority: string;
	description: string;
	status: string;
	id: string;
};
const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e?.fileList;
};

const CreateInspectionModal = (props: CreateInspectionModalProps) => {
	const { isModalOpen, handleOk, handleCancel: onCancel } = props;
	const { RangePicker } = DatePicker;
	const [file, setFile] = useState<UploadFile<any> | null>(null);
	const [form] = useForm();
	const [isValid, SetIsValid] = useState(false);
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [fileList, setFileList] = useState<UploadFile[]>([]);
	const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
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
		const isValid = !form.getFieldsError().some((error) => {
			return error.errors.length;
		});

		if (isValid) {
			handleOk();
			form.resetFields();
			setFileList([]);
		}
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
		setPreviewOpen(true);
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
			title="Ajouter une inspection"
			open={isModalOpen}
			// onOk={handleSubmit}
			// okButtonProps={{ disabled: isValid }}
			onCancel={handleCancel}
			footer={[
				<Button onClick={handleCancel}>Cancel</Button>,
				<Button
					type="primary"
					form="myForm"
					key="submit"
					htmlType="submit"
					onClick={handleSubmit}
				>
					Submit
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
				<Form.Item<FieldType>
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

				<Form.Item<FieldType>
					label="Priorité"
					name="priority"
					rules={[{ required: true, message: "Veuillez ajouter une date" }]}
				>
					<Select>
						<Select.Option value="1">Urgente</Select.Option>
						<Select.Option value="2">Haute</Select.Option>
						<Select.Option value="3">Moyenne</Select.Option>
						<Select.Option value="4">Basse</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item<FieldType>
					label="Description"
					name="description"
					rules={[
						{ required: true, message: "Veuillez ajouter une description" },
					]}
				>
					<TextArea rows={4} />
				</Form.Item>
				<Form.Item
					label="Image"
					valuePropName="fileList"
					getValueFromEvent={normFile}
				>
					<Upload
						//action="google.com"
						accept=".png,.jpg,.jpeg"
						beforeUpload={() => false}
						action={undefined}
						listType="picture-card"
						fileList={fileList}
						onPreview={handlePreview}
						onChange={handleChange}
					>
						{fileList.length >= 1 ? null : uploadButton}
					</Upload>
					{previewImage && <></>}
				</Form.Item>
			</Form>
			{/* </Flex> */}
		</Modal>
	);
};

export default CreateInspectionModal;
