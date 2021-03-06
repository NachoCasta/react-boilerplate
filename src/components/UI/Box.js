import styled from "styled-components";
import {
  space,
  color,
  width,
  height,
  fontSize,
  flex,
  order,
  alignSelf,
  borders
} from "styled-system";
import { Box } from "pcln-design-system";

const MyBox = styled(Box)(
  fontSize,
  flex,
  order,
  alignSelf,
  borders,
  color,
  height
);

MyBox.defaultProps = {};

MyBox.displayName = "Box";

MyBox.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes
};

export default MyBox;
