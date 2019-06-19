import styled from "styled-components";
import { width, borders } from "styled-system";
import { Button } from "antd";

const MyButton = styled(Button)(width, borders);

MyButton.defaultProps = {};

export default MyButton;
