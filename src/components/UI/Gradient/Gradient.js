import styled from "styled-components";
import { space, width, height } from "styled-system";
import styles from "./Gradient.module.css";

const Gradient = styled("div")(space, width, height);

Gradient.defaultProps = {
	//className: styles.gradient
};

export default Gradient;
