import styled from "styled-components";
import { Card } from "antd";
import { space, color } from "styled-system";

const MyCard = styled(Card)(color, space);

MyCard.defaultProps = {
	bg: "white"
};

export default MyCard;
