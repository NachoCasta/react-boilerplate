import React from "react";
import { mount } from "enzyme";
import Providers from "components/App/Providers";
import ElementsContainer from "./ElementsContainer";

describe("ElementsContainer", () => {
	let component;
	beforeEach(() => {
		component = mount(
			<Providers>
				<ElementsContainer />
			</Providers>
		);
	});
	it("renders", () => {});
});
