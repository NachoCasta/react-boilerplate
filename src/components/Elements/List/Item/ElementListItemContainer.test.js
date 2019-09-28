import React from "react";
import { mount } from "enzyme";

import Providers from "components/App/Providers";
import ElementListItemContainer from "./ElementListItemContainer";

describe("ElementListItemContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<ElementListItemContainer />
			</Providers>
		);
	});
	it("renders", () => {});
});
