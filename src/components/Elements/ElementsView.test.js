import React from "react";
import { shallow } from "enzyme";

import ElementsView from "./ElementsView";

describe("ElementsView", () => {
    let component;
    beforeEach(() => {
        component = shallow(<ElementsView />);
    });

    it("renders", () => {
        shallow(<ElementsView />);
    });

    it("matches snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});
