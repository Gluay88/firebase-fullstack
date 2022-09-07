- npx create-react-app . --template typescript
- npm i react-router-dom
- firebase.google.com => Go to console
- add project => fullstack-app
- Enable Google Analytics for this project => create project
- click </> web
- add name fullstack-app and register app
- follow it
- npm install firebase
- config -- src create a folder // contect to api and stuff
- firebase.ts in config
- Authentication
- Google - click it and click Enable add the email -- to connect to the authentication (and app)
  =>
- firebase.ts
- import {getAuth, GoogleAuthProvider} from 'firebase/auth'
  =>
- firebase.ts
- export const auth = getAuth(app);
- export const provider = new GoogleAuthProvider();
  =>
- login.tsx
- import { auth, provider } from "../config/firebase";
- import { signInWithPopup } from "firebase/auth";
  <!-- there are tons of signIn and stuff in there.. -->
  <!-- you can login with diff users and the app can updates -->
- npm i react-firebase-hooks
- const [user] = useAuthState(auth);
- you can login with diff accounts
