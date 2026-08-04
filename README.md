# CIA Hotsite Zamp

Next.js hotsite configured for fully static output.

## Development

```bash
npm install
npm run dev
```

## Static build and publishing

```bash
npm run build
```

The generated site is written to `dist/`. The `publish:static` script currently
builds the site; append the project's real upload/deploy command to that script:

```json
"publish:static": "npm run build && <publish-command> dist"
```

This export does not require a Node.js server. Routes must be statically known at
build time, and server-only Next.js features cannot be used.
