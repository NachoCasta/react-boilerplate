import React from "react";
import { mount } from "enzyme";
import { Button, RatingBadge } from "components/UI";
import Providers from "components/App/Providers";
import CounterContainer from "./CounterContainer";

describe("CounterContainer", () => {
    let component;
    beforeEach(() => {
        component = mount(
            <Providers>
                <CounterContainer />
            </Providers>
        );
    });

    it("initializes in 0", () => {
        expect(component.find(RatingBadge).text()).toBe("0");
    });
});
