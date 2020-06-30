import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";

import Chart from "./Chart.jsx";

const setup = (props = {}) => {
  const wrapper = shallow(<Chart {...props} />);
  return wrapper;
};

it("renders chart component without error", () => {
  const wrapper = setup({
    data: { confirmed: 1000000, recovered: 900000, deaths: 100000 }
  });
  const chartComponent = findByTestAttr(wrapper, "component-chart");
  expect(chartComponent.length).toBe(1);
});
