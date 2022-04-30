const fastify = process.fastify;

const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const apihost = process.env.API_HOST; //todo: change apihost subdomain to token
const path = require("path");

fastify.setErrorHandler(async (err, req, res) => {
  Sentry.captureException(err);
  console.warn(err);

  Object.keys(res.getHeaders()).forEach((h) => res.removeHeader(h));
  res.send(
    JSON.parse(
      JSON.stringify(err).replace(process.env.ZNW_INTERNAL_API, "<internal>")
    )
  );
});

// static
fastify.register(require("fastify-static"), {
  root: "/app/public",
  prefix: "/local",
});

//proxify after processing
fastify.register(require("fastify-reply-from"), {
  base: `http://${apihost}`,
});

// fastify-formbody lets us parse incoming forms
fastify.register(require("fastify-formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});

// Load and parse SEO data
const seo = require("/app/src/seo.json");
if (seo.url === "glitch-default") {
  seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
}
