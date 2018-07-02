# Steps to reproduce

1. Make sure you have a node version less than 10 (for example 8) because node 10 doesn't log errors anymore when a promise rejection is unhandled.
2. `npm install`
3. `npm run dev`
4. You should see something similar to this error:
```
(node:11722) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, open '/Users/cyril.wanner/Development/react/next-offline-bug/.next/BUILD_ID'
```
