import React from "react";
import { shallow } from "enzyme";

import ElementListItemView from "./ElementListItemView";

describe("ElementListItemView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<ElementListItemView />);
	});

	it("renders", () => {
		shallow(<ElementListItemView />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
