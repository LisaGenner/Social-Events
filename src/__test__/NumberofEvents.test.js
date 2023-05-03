
import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberofEvents";

 describe("<NumberOfEvents /> component", () => {
   let NumberOfEventsWrapper;
   beforeAll(() => {
     NumberOfEventsWrapper = shallow(<NumberOfEvents />);
   });
   test("renders the component", () => {
     expect(NumberOfEventsWrapper).toBeDefined();
   });
   test("the input should have a default value of 10", () => {
     expect(NumberOfEventsWrapper.find("input.num").prop("type")).toBe("number");
     expect(NumberOfEventsWrapper.state("num")).toBe(10);
   });
   test("input should change on user input", () => {
     expect(NumberOfEventsWrapper.state("num")).toBe(10);
     NumberOfEventsWrapper.find("input.num").simulate("change", {
       target: { value: 5 },
     });
     expect(NumberOfEventsWrapper.state("num")).toBe(5);
   });
 });