# FieldOps — demo mobile app

A small React Native (Expo) field-service app used to demonstrate WithVibe
environments working on mobile projects.

- **Web preview** (what the environment exposes): the app renders inside an
  iPhone-style frame via `react-native-web` — `npm run web`.
- **Real device**: `npx expo start` and scan the QR code with Expo Go.

## Structure

- `App.tsx` — root, bottom tab bar
- `src/screens/` — Home, Jobs (filterable list), Profile
- `src/components/PhoneFrame.tsx` — web-only device frame
- `src/data.ts` — demo jobs data
- `src/theme.ts` — colors and radii
