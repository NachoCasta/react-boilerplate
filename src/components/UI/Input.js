import styled from "styled-components";
import { fontSize, borders, space } from "styled-system";
import { Input } from "antd";

const MyInput = styled(Input)(fontSize, borders, space);

MyInput.defaultProps = {};

export default MyInput;
