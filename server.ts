import * as http from "node:http";
import { createRequestListener } from "remix/node-fetch-server";
import { createRouter, route } from "remix/fetch-router";
import { createHtmlResponse } from "remix/response/html";
import Index from "./app/routes/_index.js";

const routes = route({
  home: "/",
});

const router = createRouter();

router.map(routes, {
  home() {
    return createHtmlResponse(Index());
  },
});

async function handler(request: Request): Promise<Response> {
  return router.fetch(request);
}

const server = http.createServer(createRequestListener(handler));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
