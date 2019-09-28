import React from "react";
import { shallow } from "enzyme";

import ElementView from "./ElementView";

describe("ElementView", () => {
    let component;
    beforeEach(() => {
        component = shallow(<ElementView />);
    });

    it("renders", () => {
        shallow(<ElementView />);
    });

    it("matches snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});
