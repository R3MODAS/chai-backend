import { serve } from "bun";

const hostname = "127.0.0.1";
const PORT = 3000;

const server = serve({
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response("Hello, This is a server", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
      return new Response("Hello, This is a Ice tea", { status: 200 });
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },
  port: PORT,
  hostname,
});

console.log(`Server is listening to ${server.url}`);
