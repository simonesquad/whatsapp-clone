// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4SU5nhfgmXWCw6OCj9YFJtMIGpIgyRy8",
  authDomain: "whatsapp-clone-af915.firebaseapp.com",
  projectId: "whatsapp-clone-af915",
  storageBucket: "whatsapp-clone-af915.appspot.com",
  messagingSenderId: "666453297991",
  appId: "1:666453297991:web:92f915014d3251eafc9a62",
  measurementId: "G-S5VF7YH899"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;