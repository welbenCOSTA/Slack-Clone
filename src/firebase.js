import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDF1Zh-kAXvJ_z9H-lXI3uhZtf660dMr2g",
  authDomain: "slack-clone-46062.firebaseapp.com",
  projectId: "slack-clone-46062",
  storageBucket: "slack-clone-46062.appspot.com",
  messagingSenderId: "527122246896",
  appId: "1:527122246896:web:431a1c01ab6c79eceda635"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }
