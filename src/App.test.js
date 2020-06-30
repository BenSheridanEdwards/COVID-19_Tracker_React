import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import mockAxios from "axios";

import App from "./App";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

it("renders app component without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

it("calls axios and returns data from the COVID-19 api", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        confirmed: {},
        recovered: {},
        deaths: {},
        lastUpdate: {}
      }
    })
  );

  const wrapper = setup();
  wrapper.instance().componentDidMount();
  expect(mockAxios.get).toHaveBeenCalledTimes(3);
  expect(mockAxios.get).toHaveBeenCalledWith("https://covid19.mathdro.id/api");
  expect(wrapper.state()).toEqual({ country: "", data: {} });
});
