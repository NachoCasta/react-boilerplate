import React from "react";
import {
	FormField,
	Label,
	Icon,
	Input,
	Tooltip,
	Relative
} from "pcln-design-system";

const InputField = ({ name, label, icon, error, ...rest }) => (
	<Relative ml={icon ? "5px" : null} mr={icon ? "-3px" : null}>
		<FormField>
			<Label style={{ width: "200px" }} htmlFor={name}>
				{label}
			</Label>
			{icon && <Icon name={icon} size="20" />}
			<Input id={name} name={name} {...rest} />
			{error && <Icon name="Warning" color="red" />}
		</FormField>
		{error && (
			<Tooltip bottom right color="white" bg="red">
				{error}
			</Tooltip>
		)}
	</Relative>
);

export default InputField;
