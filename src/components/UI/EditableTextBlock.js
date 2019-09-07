import React from "react";
import { Input } from "antd";
import { Heading } from "pcln-design-system";
import TextBlock from "./TextBlock";
import Code from "./Code";

const EditableTextBlock = ({ title, edit, value, code, extra, ...rest }) => (
	<React.Fragment>
		{title && <Heading.h3>{title}</Heading.h3>}
		{edit ? (
			<React.Fragment>
				<Input.TextArea
					style={code && { fontFamily: "monospace" }}
					value={value}
					{...rest}
				/>
				{extra}
			</React.Fragment>
		) : code ? (
			<Code>{value}</Code>
		) : (
			<TextBlock>{value}</TextBlock>
		)}
	</React.Fragment>
);

EditableTextBlock.defaultProps = {
	autosize: { minRows: 5, maxRows: 10 }
};

export default EditableTextBlock;
