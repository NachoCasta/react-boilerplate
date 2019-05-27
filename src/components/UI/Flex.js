import styled from "styled-components";
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  overflow,
  height
} from "styled-system";
import Box from "./Box";

const Flex = styled(Box)(
  {
    display: "flex",
    flexWrap: "wrap"
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  overflow,
  height
);

Flex.displayName = "Flex";

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
};

export default Flex;
