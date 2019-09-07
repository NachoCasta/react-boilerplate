import styled from "styled-components";
import { width, borders, space } from "styled-system";
import { Button } from "antd";

const MyButton = styled(Button)(width, borders, space);

MyButton.defaultProps = {};

export default MyButton;
