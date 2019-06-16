import React from "react";
import { shallow } from "enzyme";

import TodosViewView from "./TodosViewView";

describe("TodosViewView", () => {
	let component;
	beforeEach(() => {
		component = shallow(<TodosView />);
	});

	it("renders", () => {
		shallow(<TodosView />);
	});

	it("matches snapshot", () => {
		expect(component).toMatchSnapshot();
	});
});
