import React from "react";
import ElementsComponent from "components/Elements";
import { Switch, Route } from "react-router-dom";
import Element from "./element";

const Elements = props => (
    <Switch>
        <Route path="/elements" exact component={ ElementsComponent } />
        <Route path="/elements/:id" component={ Element } />
    </Switch>
);

export default Elements;
