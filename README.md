- npx create-react-app . --template typescript
- npm i react-router-dom
- firebase.google.com => Go to console
- add project => fullstack-app
- Enable Google Analytics for this project => create project
- click </> web
- add name fullstack-app and register app
- follow it
- npm install firebase
- config -- src create a folder // connect to api and stuff
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

---

- set up the database
- console.firebase.google.com
- Project Overview
- Build
- Firestore Database
- Create database => Start in production mode => next => pick location us-central is fine (db is hosted in us-central - closest to me)
- Cloud Firestore page
- Start collection (like MongoDB -- table)
- document is like an entry
- create document name posts
- Document parent path -> /posts
- Document ID -> AutoId
- Field Type Value
- looks like an obj ... below

```
description
"Hurricane Clinton is coming soon!"
id
"xxggrrr88"
title
"Breaking News"
username
"Gluay20"
```

- Folder Structure
- create-post folder => create-form.tsx and create-post.tsx

- Form Library - react
- npm i react-hook-form yup @hookform/resolvers
- "@hookform/resolvers": "^2.9.8"

- create-form.tsx

```
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
```

```
const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
```

- add the interface type to useForm

```
useForm<CreateFormData>
```

- config => firebase.ts
- import { getFirestore } from "firebase/firestore";
- export const db = getFirestore(app);

- create-form.tsx page
  import { addDoc, collection } from "firebase/firestore";

addDoc is a function from firestore
collection - which collection we refer to...

- import { db } from "../../config/firebase";

```
 const postsRef = collection(db, "posts");
```

- create-form.tsx
  import { auth, db } from "../../config/firebase";
  and
  const [user] = useAuthState(auth);

\*\*\* createFormControl.ts:1072 Uncaught (in promise) FirebaseError: Missing or insufficient permissions.

\*\*\* change the authentication write, read, delete

- Cloud Firestore
- Rules
- OG allow read, write: if false;
  allow write: if request.auth != null && request.auth.uId == request.resource.data.userId;

add delete, update in firestore

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write, delete, update: if request.auth != null && request.auth.uid == request.resource.data.userId;
      allow read: if request.auth != null;
    }
  }
}
```

---

- main.tsx => getDocs function
- import {getDocs} from "firebase/firestore"
- destruction data =>

```console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

```

- define useState<Post[]> => from interface Post
- array of post

```
setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
```

- as Post[]

\*\*\* add likes collection into the firestore - google

- Firestore Data
- Start collection => likes

\*\*\* get how many likes by using query from firestore

- import {where} from "firebase/firestore"
- postId => field / == / post.id

```
const likesDoc = query(likesRef, where("postId", "==", post.id));
```

- add delete

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write, delete, update: if request.auth != null && request.auth.uid == request.resource.data.userId;
      allow read, delete: if request.auth != null;
    }
  }
}
```
