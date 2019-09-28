import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import ElementContainer from "./ElementContainer";

describe("ElementContainer", () => {
    let component;
    beforeEach(() => {
        component = mount(
            <Providers>
                <ElementContainer />
            </Providers>
        );
    });
    it("renders", () => {});
});
