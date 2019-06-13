import React from "react";
import { shallow } from "enzyme";

import AboutView from "./AboutView";

describe("AboutView", () => {
	it("renders", () => {
		shallow(<AboutView />);
	});
});
