import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import TodosContainer from "./TodosContainer";

describe("TodosContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<TodosContainer />
			</Providers>
		);
	});
	it("renders", () => {
		mount(<TodosContainer />);
	});
});
