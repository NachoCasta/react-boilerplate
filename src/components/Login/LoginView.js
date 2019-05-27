import React from "react";
import {
	Flex,
	Box,
	CardContainer,
	Heading,
	Button,
	Form,
	InputField
} from "components/UI";

const Login = ({ fields, onSubmit }) => {
	return (
		<CardContainer width={[1, 3 / 4, 2 / 3, 1 / 2]}>
			<Flex justifyContent="center">
				<Box>
					<Heading align="center">Login</Heading>
				</Box>
			</Flex>
			<Form>
				<Flex justifyContent="space-around">
					{fields.map(({ width, label, ...rest }) => (
						<Box key={label} width={width} p={1}>
							<InputField label={label} {...rest} />
						</Box>
					))}
					<Box width={1} p={1}>
						<Button type="button" width={1} onClick={onSubmit}>
							Login
						</Button>
					</Box>
				</Flex>
			</Form>
		</CardContainer>
	);
};

export default Login;
