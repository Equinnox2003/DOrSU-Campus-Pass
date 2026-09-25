# DOrSU Digital Campus Pass

ITMSD 1 - Laboratory Exercise 03. Expo SDK 57, React 19, React Native and strict TypeScript.

## Run

Use Node.js 22.13+ (Node 24 LTS recommended). From this folder:

```sh
npm install
npx expo start
```

Scan the Metro QR code with a compatible Expo Go app on your phone (same Wi-Fi), or press `a` for a configured Android emulator. Press `w` for a browser preview. If LAN discovery fails, use `npx expo start --tunnel` and follow Expo's dependency prompt. Do not install the obsolete global expo-cli package.

```sh
npm run typecheck
npm run build:web
```

## App behavior

- StudentCard receives immutable, typed student data and pass status.
- ScanCounter receives its count and callbacks from App.
- Scan increments from 0 using `setGateScans(prev => prev + 1)`; Reset returns to 0.
- Suspension changes only the main pass badge and toggle label; as in the guide's simulator, scanning remains a separate demonstration control.
- The peer demo reuses StudentCard with different props; its status remains active.
- State is in memory and resets on a full reload. The count is a demo-session total, not a persisted daily attendance record.
- The bundled avatar works offline. Set avatarUrl for a remote image; a failed image falls back to the local asset.

## Files

```text
App.tsx                    Parent state and screen composition
index.ts                   registerRootComponent entry
app.json                   Expo app identity/configuration
package.json               Dependencies and run scripts
tsconfig.json              Strict TypeScript configuration
src/types/student.ts       StudentProfile and StatusBadgeProps
src/data/student.ts        Sample primary and peer profiles
src/components/Header.tsx  Institutional header
src/components/StudentCard.tsx
src/components/StatusBadge.tsx
src/components/ScanCounter.tsx
src/styles/theme.ts        Shared colors
assets/avatar.png          Local placeholder avatar
```

## Personalize

Edit `src/data/student.ts` with your own details. Both profiles currently come from the guide and are labeled SAMPLE ID. Update that label and the sample-identities footer if you replace the sample data. Keep personal data exposure in mind before publishing a public repository; the sample data can remain in the public demo if your instructor permits it.

## Submission

See `docs/SUBMISSION.md`. The supplied PDF is a preparation draft until student details, native-device evidence, personal reflections, public repository URL and demo link are filled in. Browser captures are labeled accurately and do not prove native-device testing.

The six exercise commits record AI-assisted construction of this project under a generic builder identity. They are not evidence that the student personally performed those exercises. Review, explain, and adapt the implementation, and follow your instructor's AI-assistance policy.

## References

- Provided ITMSD1-Lab03-React-Native-Guide.html
- https://docs.expo.dev/versions/v57.0.0/
- https://docs.expo.dev/versions/v57.0.0/sdk/safe-area-context/
- https://reactnative.dev/docs/components-and-apis
