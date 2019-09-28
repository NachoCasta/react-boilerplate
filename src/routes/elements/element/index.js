import React from "react";
import ElementComponent from "components/Elements/Element";
import { Switch, Route } from "react-router-dom";

const Element = ({
    match: {
        params: { id }
    }
}) => <ElementComponent id={id} />;

export default Element;
