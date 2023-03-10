import { initializeApp } from "firebase/app";

// firebase configuration

const app = initializeApp({
  apiKey: "AIzaSyDyHRwTfmolYrhBuwY2FBnr7tplhy1sYKM",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL:
    "https://react-quiz-dev-26118-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export default app;
