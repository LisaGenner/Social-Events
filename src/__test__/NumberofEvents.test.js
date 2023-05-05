
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
     expect(NumberOfEventsWrapper.find("input.number").prop("type")).toBe("number");
     expect(NumberOfEventsWrapper.state("number")).toBe(10);
   });
   test("input should change on user input", () => {
     expect(NumberOfEventsWrapper.state("number")).toBe(10);
     NumberOfEventsWrapper.find("input.number").simulate("change", {
       target: { value: 5 },
     });
     expect(NumberOfEventsWrapper.state("number")).toBe(10);
   });
 });