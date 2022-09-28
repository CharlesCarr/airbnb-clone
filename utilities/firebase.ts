// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEVIbVCjeR52oD0hFk-U1KnvwG6I_QClM",
  authDomain: "airbnb-clone-7c0b2.firebaseapp.com",
  databaseURL: "https://airbnb-clone-7c0b2-default-rtdb.firebaseio.com",
  projectId: "airbnb-clone-7c0b2",
  storageBucket: "airbnb-clone-7c0b2.appspot.com",
  messagingSenderId: "710077775978",
  appId: "1:710077775978:web:82bf1babd28b3534b58a13",
  measurementId: "G-9140N5CCQY"
};

/* From Firebase Docs:
Unlike how API keys are typically used,
API keys for Firebase services are not
used to control access to backend resources;
that can only be done with Firebase Security
Rules (to control which users can access resources)
and App Check (to control which apps can access resources).

Usually, you need to fastidiously guard API keys
(for example, by using a vault service or setting
the keys as environment variables); however,
API keys for Firebase services are ok
to include in code or checked-in config files.
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloude Firestore and get a reference to the service
const db = getFirestore(app);
export { db };
// const analytics = getAnalytics(app);

// Setup App Check later


