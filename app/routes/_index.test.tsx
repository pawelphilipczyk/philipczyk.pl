import { describe, test } from "riteway";
import { createRouter, route } from "remix/fetch-router";
import { createHtmlResponse } from "remix/response/html";
import Index from "./_index.js";

describe("Homepage", () => {
  test("should display homepage content", async ({ assert }) => {
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
});
