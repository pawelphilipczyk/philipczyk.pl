import { describe, test } from "vitest";
import { createRouter, route } from "remix/fetch-router";
import { createHtmlResponse } from "remix/response/html";
import { assert } from "../../test-utils/assert.js";
import Index from "./_index.js";

describe("Homepage", () => {
  test("should display homepage content", async () => {
    const routes = route({
      home: "/",
    });

    const router = createRouter();

    router.map(routes, {
      home() {
        return createHtmlResponse(Index());
      },
    });

    const request = new Request("http://localhost/");
    const response = await router.fetch(request);
    const htmlContent = await response.text();

    assert({
      given: "a user visits philipczyk.pl",
      should: "display a homepage with placeholder content",
      actual: htmlContent.includes("<main>") && htmlContent.includes("Welcome to philipczyk.pl"),
      expected: true,
    });
  });

  test("should have Home link that navigates to homepage", async () => {
    const routes = route({
      home: "/",
    });

    const router = createRouter();

    router.map(routes, {
      home() {
        return createHtmlResponse(Index());
      },
    });

    const request = new Request("http://localhost/");
    const response = await router.fetch(request);
    const htmlContent = await response.text();

    const homeLinkPattern = /<a[^>]*href=["']\/["'][^>]*>Home<\/a>/;
    
    assert({
      given: "a user clicks the Home link",
      should: "navigate to the homepage",
      actual: homeLinkPattern.test(htmlContent),
      expected: true,
    });
  });

  test("should have Github link that navigates to GitHub repository", async () => {
    const routes = route({
      home: "/",
    });

    const router = createRouter();

    router.map(routes, {
      home() {
        return createHtmlResponse(Index());
      },
    });

    const request = new Request("http://localhost/");
    const response = await router.fetch(request);
    const htmlContent = await response.text();

    const githubLinkPattern = /<a[^>]*href=["']https:\/\/github\.com\/pawelphilipczyk["'][^>]*>Github<\/a>/;
    
    assert({
      given: "a user clicks the Github link",
      should: "navigate to the GitHub repository",
      actual: githubLinkPattern.test(htmlContent),
      expected: true,
    });
  });
});
