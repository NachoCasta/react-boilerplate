import React from "react";
import { shallow } from "enzyme";

import ListView from "./ListView";

describe("ListView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<ListView />);
	});

	it("renders", () => {
		shallow(<ListView />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
