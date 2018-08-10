# React, React Router v4, Firebase, Netlify: Events

## Links
- [Intro to Firebase and React, CSS-Tricks](https://css-tricks.com/intro-firebase-react/)
- [How to Create a Reddit Clone Using React and Firebase, SitePoint](https://www.sitepoint.com/reddit-clone-react-firebase/)
- [React Redux Firebase CRUD App with Authentication, Section 1: 3](https://www.udemy.com/react-redux-firebase/learn/v4/t/lecture/9249426?start=0)
- [Programmatically navigate with React Router](https://tylermcginnis.com/react-router-programmatically-navigate/)
-[Pass props to a component rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/)
- [How to Integrate React with Firebase](https://www.youtube.com/watch?v=vmLaZafaw9E&index=6&list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- [How to Deploy a React Application (with Netlify)](https://www.youtube.com/watch?v=lCcBEDPTk4o&index=10&list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- [ReactJS: Upload Image to Firebase storage and Display on web, ConCat 7, YouTube](https://www.youtube.com/watch?v=YR4roPyfDQU)
- [Firebase Database Rules Tutorial](https://www.youtube.com/watch?v=qLrDWBKTUZo)
- [List of All Countries in JSON](https://dzone.com/articles/list-of-all-countries-in-json)

## Installations
- Install: yarn add firebase react-router-dom lodash
- yarn start

## Setup firebase, bootstrap and fontawesome
- [React Redux Firebase CRUD App with Authentication, Section 1: 3](https://www.udemy.com/react-redux-firebase/learn/v4/t/lecture/9249426?start=0)
- [How to Integrate React with Firebase](https://www.youtube.com/watch?v=vmLaZafaw9E&index=6&list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- Add bootstrap and fontawesome CDN to public/index.html
- Add firebase to src/config/firebase.js
- Create .env to store environment variables

## Firebase database
## Firebase storage
- [ReactJS: Upload Image to Firebase storage and Display on web, ConCat 7, YouTube](https://www.youtube.com/watch?v=YR4roPyfDQU)

- Change firebase storage rules

```javascript
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

## Netlify
- [How to Deploy a React Application (with Netlify)](https://www.youtube.com/watch?v=lCcBEDPTk4o&index=10&list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- [Firebase Database Rules Tutorial](https://www.youtube.com/watch?v=qLrDWBKTUZo)

- Firebase Database Rules

```javascript
{
  "rules": {
    ".read": true,
    ".write": false
  }
}
```

- Firebase Storage Rules

```javascript
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

- Create a redirects file in the public folder: public/_redirects

```javascript
/* /index.html 200
```
- ** Run yarn run build
- Add environment variables to netlify

- https://zevents-fb.netlify.com/
