import React from "react";
import {
	Flex,
	Box,
	CardContainer,
	Heading,
	Text,
	Button,
	Form,
	InputField,
	OnClickLink
} from "components/UI";

const Login = ({
	fields,
	onSubmit,
	submitLabel,
	footerText,
	footerButton,
	footerButtonText
}) => (
	<CardContainer width={[1, 3 / 4, 2 / 3, 1 / 2]}>
		<Heading textAlign="center">Authentication</Heading>
		<Form>
			<Flex justifyContent="space-around">
				{fields.map(({ width, label, ...rest }) => (
					<Box key={label} width={width} p={1}>
						<InputField label={label} {...rest} />
					</Box>
				))}
				<Box width={1} p={1}>
					<Button type="button" width={1} onClick={onSubmit}>
						{submitLabel}
					</Button>
				</Box>
			</Flex>
		</Form>
		<Text textAlign="center">
			{footerText}{" "}
			<OnClickLink onClick={footerButton}>{footerButtonText}</OnClickLink>
		</Text>
	</CardContainer>
);

export default Login;
