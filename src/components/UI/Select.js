import styled from "styled-components";
import { fontSize, borders, space, width } from "styled-system";
import { Select } from "antd";

const MySelect = styled(Select)(fontSize, borders, space, width);

MySelect.defaultProps = {};

export default MySelect;
