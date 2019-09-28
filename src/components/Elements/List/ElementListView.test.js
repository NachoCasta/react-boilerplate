import React from "react";
import { shallow } from "enzyme";

import ElementListView from "./ElementListView";

describe("ElementListView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<ElementListView />);
	});

	it("renders", () => {
		shallow(<ElementListView />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
