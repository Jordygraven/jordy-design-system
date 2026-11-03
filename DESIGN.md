# Design

Canonical source for the shared look. Token values live in `src/tokens.css`.

## Colours

Dark theme only. Background is `#0a0f1e`, text is `#f4f7ff`, primary is teal `#2dd4bf`.

## Glass surfaces

Cards use a translucent white fill, a 16% white border and a 22px blur.

## Rules

- Dashboards use these tokens. No hard-coded hex colours.
- Shared components change here only, never inside a dashboard.

## Components

Core set: Button, Badge, Card, Input, Select, Table, ErrorBanner, StatusDot. Import them all from `jordy-ui`.

Select and ErrorBanner hold client state, so dashboards must import them from client code in the App Router. The other components work in server components.
