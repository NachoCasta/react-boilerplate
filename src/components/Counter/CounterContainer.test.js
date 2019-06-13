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

	it("increments by one when clicking increment", () => {
		component
			.find(Button)
			.first()
			.simulate("click");
		expect(component.find(RatingBadge).text()).toBe("1");
	});

	it("decrements by one when clicking decrement", () => {
		component
			.find(Button)
			.last()
			.simulate("click");
		expect(component.find(RatingBadge).text()).toBe("-1");
	});
});
