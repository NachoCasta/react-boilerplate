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

const Login = ({ fields, onSubmit, signIn, footerButton }) => (
	<CardContainer
		title={<Heading textAlign="center">Authentication</Heading>}
		width={[1, 3 / 4, 2 / 3, 1 / 2]}
	>
		<Form>
			<Flex justifyContent="space-around">
				{fields.map(({ width, label, ...rest }) => (
					<Box key={label} width={width} p={1}>
						<InputField label={label} {...rest} />
					</Box>
				))}
				<Box width={1} p={1}>
					<Button type="primary" width={1} onClick={onSubmit}>
						{signIn ? "Sign In" : "Sign Up"}
					</Button>
				</Box>
			</Flex>
		</Form>
		<Text textAlign="center">
			{signIn ? "Don't have an account yet?" : "Already have an account?"}
			<OnClickLink onClick={footerButton}>
				{signIn ? "Sign Up" : "Sign In"}
			</OnClickLink>
		</Text>
	</CardContainer>
);

export default Login;
