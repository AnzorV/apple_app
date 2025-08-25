import React from 'react'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";
import { createRoot } from 'react-dom/client';

Sentry.init({
  dsn: "https://a987838c75ce5277231f4c12d7af8267@o4509888749371392.ingest.de.sentry.io/4509888754876496",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
  Sentry.replayIntegration({
  blockSelector: ".sentry-block", // only block elements you mark
  maskAllText: false,
  blockAllMedia: false,
}),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)