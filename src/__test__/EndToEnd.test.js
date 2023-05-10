import puppeteer from "puppeteer-core";

describe("show/hide an event details", () => {
  test("An event element is collapsed by default", async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".summary");

    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
    browser.close();
  });
});
