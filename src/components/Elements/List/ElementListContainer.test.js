import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import ElementListContainer from "./ElementListContainer";

describe("ElementListContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<ElementListContainer />
			</Providers>
		);
	});
	it("renders", () => {});
});
