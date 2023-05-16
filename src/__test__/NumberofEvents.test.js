
import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvent";

 describe("<NumberOfEvents /> component", () => {
   let NumberOfEventsWrapper;
   beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
   });
   test("renders the component", () => {
     expect(NumberOfEventsWrapper).toBeDefined();
   });
   test("the input should have a default value of 10", () => {
     expect(NumberOfEventsWrapper.find("input.numberOfEvents").prop("type")).toBe("number");
     expect(NumberOfEventsWrapper.state().query).toEqual(32);
   });
   test("Value changes correctly", () => {
    NumberOfEventsWrapper.find(".numberOfEvents").simulate("change", {
      target: { value: 20 },
    });
    expect(NumberOfEventsWrapper.state("query")).toBe(20);
  });
 });
 