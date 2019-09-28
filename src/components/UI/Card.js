import React from "react";
import styled from "styled-components";
import { Heading } from "components/UI";
import { Card } from "antd";
import { space, color } from "styled-system";

const StyledCard = styled(Card)(color, space);

const MyCard = ({ heading, title, ...rest }) => (
    <StyledCard
        title={heading ? <Heading textAlign="center">{title}</Heading> : title}
        {...rest}
    />
);

MyCard.defaultProps = {
    bg: "white",
    heading: false
};

export default MyCard;
