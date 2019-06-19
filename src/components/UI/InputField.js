import React from "react";
import { Form, Icon, Input } from "antd";

const InputField = ({ name, label, icon, error, ...rest }) => (
	<Form.Item style={{ marginBottom: 0 }} label={label}>
		<Input
			prefix={<Icon type={icon} style={{ color: "rgba(0,0,0,.25)" }} />}
			id={name}
			name={name}
			{...rest}
		/>
	</Form.Item>
);

export default InputField;
