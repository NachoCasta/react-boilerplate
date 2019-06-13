import React from "react";
import { shallow } from "enzyme";

import AboutContainer from "./AboutContainer";

describe("AboutContainer", () => {
	it("renders", () => {
		shallow(<AboutContainer />);
	});
});
