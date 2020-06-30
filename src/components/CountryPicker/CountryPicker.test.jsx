import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";

import CountryPicker from "./CountryPicker";

const setup = (props = {}) => {
  const wrapper = shallow(<CountryPicker {...props} />);
  return wrapper;
};

it("renders country picker component without error", () => {
  const wrapper = setup();
  const countryPickerComponent = findByTestAttr(
    wrapper,
    "component-country-picker"
  );
  expect(countryPickerComponent.length).toBe(1);
});
