import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("user has searched for a city", () => {});

    when("the events are listed", () => {});

    then("the event details should be collapsed by default", () => {});
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    given("the city-search list is displayed", () => {});

    when("a user clicks on the details button", () => {});

    then("the event details should expand displaying its details", () => {});
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given("an event details are expanded", () => {});

    when("user clicks collapse button", () => {});

    then(
      "the details should collapse within the specific event, hiding its details",
      () => {}
    );
  });
});
