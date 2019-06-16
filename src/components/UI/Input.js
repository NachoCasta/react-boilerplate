import styled from "styled-components";
import { fontSize, borders } from "styled-system";
import { Input } from "pcln-design-system";

const MyInput = styled(Input)(fontSize, borders);

MyInput.defaultProps = {};

export default MyInput;
