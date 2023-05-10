import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyTheNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("a blank number of events field", () => {});

    when("a user clicks search", () => {});

    then(
      /^show the default number of (\d+) events to be displayed$/,
      (arg0) => {}
    );
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("a user enters a number in the number of events field", () => {});

    when("the user is on the event search page", () => {});

    then("display the number of events specified by the user", () => {});
  });
});
