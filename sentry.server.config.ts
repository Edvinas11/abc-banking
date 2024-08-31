// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://840331290f6f5e37f6744f1bf76eab89@o4507872361185280.ingest.de.sentry.io/4507872364265552",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
