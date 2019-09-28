import React from "react";
import { Flex, Box, FadeCard } from "./";

const CardContainer = ({ width, children, ...rest }) => (
    <Flex justifyContent="center">
        <Box width={width}>
            <FadeCard {...rest}>{children}</FadeCard>
        </Box>
    </Flex>
);

CardContainer.defaultProps = {
    width: 1
};

export default CardContainer;
