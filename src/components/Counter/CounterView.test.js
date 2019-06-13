import React from "react";
import { shallow } from "enzyme";

import { RatingBadge } from "components/UI";
import CounterView from "./CounterView";

describe("CounterView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<CounterView counter={5} />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});

	it("renders counter value", () => {
		expect(component.find(RatingBadge).text()).toBe("5");
	});
});
