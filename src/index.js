import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello from root!" });
});

app.get("/hello", (c) => {
  return c.json({ message: "Hello from path!" });
});

app.notFound((c) => {
  return c.json({ error: "Not Found" }, 404);
});

export default app;
