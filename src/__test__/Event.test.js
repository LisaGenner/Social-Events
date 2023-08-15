// src/__tests__/Event.test.js
import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  const event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  // test 1: renders the event component
  test("renders the  component", () => {
    expect(EventWrapper).toBeDefined();
  });

  // test 2: renders the h2 summary correctly
  test("renders the summary as h1", () => {
    const summary = EventWrapper.find("h1.summary");
    expect(summary).toHaveLength(1);
    expect(summary.text()).toBe(event.summary);
  });

  // test 3: checks the start time of location is rendered
  test("renders the start details", () => {
    const eventStart = EventWrapper.find("p.event-start");
    expect(eventStart).toHaveLength(1);
    expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
  });

  // test 4: checks the location is rendered
  test("renders location details", () => {
    const eventLocation = EventWrapper.find("p.event-location");
    expect(eventLocation).toHaveLength(1);
    expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);
  });

  // Test 5: checks the button is collapsed by default
 test("renders collapsed state as default", () => {
     expect(EventWrapper.state("collapsed")).toBe(true);
 });

   // test 6: renders collapsed view
   test('the collapsed view is rendered correctly', () => {
    expect(EventWrapper.find('h2.about')).toHaveLength(0);
    expect(EventWrapper.find('a.link')).toHaveLength(0);
    expect(EventWrapper.find('p.description')).toHaveLength(0);
});
});
