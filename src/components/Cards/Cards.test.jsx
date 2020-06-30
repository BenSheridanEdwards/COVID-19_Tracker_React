import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";

import Cards from "./Cards";

const setup = (props = {}) => {
  const wrapper = shallow(<Cards {...props} />);
  return wrapper;
};

it("should render `loading...` when the component has not received data from the COVID-19 API", () => {
  const wrapper = setup({ data: {} });
  expect(wrapper.text()).toBe("Loading...");
});

it("renders cards component without error", () => {
  const wrapper = setup({
    data: {
      confirmed: { value: 1000000 },
      recovered: { value: 900000 },
      deaths: { value: 100000 },
      lastUpdate: "2020-05-02T19:32:29.000Z"
    }
  });
  const cardsComponent = findByTestAttr(wrapper, "component-cards");
  expect(cardsComponent.length).toBe(1);
});

describe("it renders the infected card item with the expected content", () => {
  let wrapper;
  let infectedCard;
  beforeEach(() => {
    wrapper = setup({
      data: {
        confirmed: { value: 1000000 },
        recovered: { value: 900000 },
        deaths: { value: 100000 },
        lastUpdate: "2020-05-02T19:32:29.000Z"
      }
    });
    infectedCard = findByTestAttr(wrapper, "card-infected");
  });

  it("should render the infected card", () => {
    expect(infectedCard.length).toBe(1);
  });

  it("should render the text `Infected`", () => {
    expect(infectedCard.text()).toContain("Infected");
  });

  it("should render the imported CountUp component", () => {
    expect(infectedCard.text()).toContain("<CountUp />");
  });

  it("should render the date `May 02 2020`", () => {
    expect(infectedCard.text()).toContain("May 02 2020");
  });

  it("should render the text `Number of active cases of COVID-19`", () => {
    expect(infectedCard.text()).toContain("Number of active cases of COVID-19");
  });
});

describe("it renders the recovered card item with the expected content", () => {
  let wrapper;
  let recoveredCard;
  beforeEach(() => {
    wrapper = setup({
      data: {
        confirmed: { value: 1000000 },
        recovered: { value: 900000 },
        deaths: { value: 100000 },
        lastUpdate: "2020-05-02T19:32:29.000Z"
      }
    });
    recoveredCard = findByTestAttr(wrapper, "card-recovered");
  });

  it("should render the recovered card", () => {
    expect(recoveredCard.length).toBe(1);
  });

  it("should render the text `Recovered`", () => {
    expect(recoveredCard.text()).toContain("Recovered");
  });

  it("should render the imported CountUp component", () => {
    expect(recoveredCard.text()).toContain("<CountUp />");
  });

  it("should render the date `May 02 2020`", () => {
    expect(recoveredCard.text()).toContain("May 02 2020");
  });

  it("should render the text `Number of recoveries from COVID-19`", () => {
    expect(recoveredCard.text()).toContain(
      "Number of recoveries from COVID-19"
    );
  });
});

describe("it renders the deaths card item with the expected content", () => {
  let wrapper;
  let deathsCard;
  beforeEach(() => {
    wrapper = setup({
      data: {
        confirmed: { value: 1000000 },
        recovered: { value: 900000 },
        deaths: { value: 100000 },
        lastUpdate: "2020-05-02T19:32:29.000Z"
      }
    });
    deathsCard = findByTestAttr(wrapper, "card-deaths");
  });

  it("should render the deaths card", () => {
    expect(deathsCard.length).toBe(1);
  });

  it("should render the text `Deaths`", () => {
    expect(deathsCard.text()).toContain("Deaths");
  });

  it("should render the imported CountUp component", () => {
    expect(deathsCard.text()).toContain("<CountUp />");
  });

  it("should render the date `May 02 2020`", () => {
    expect(deathsCard.text()).toContain("May 02 2020");
  });

  it("should render the text `Number of deaths caused by COVID-19`", () => {
    expect(deathsCard.text()).toContain("Number of deaths caused by COVID-19");
  });
});
