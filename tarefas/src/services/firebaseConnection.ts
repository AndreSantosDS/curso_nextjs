import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDa7kLb77sUF31HjhFG9F2SqTP3khQf4vc",
  authDomain: "tarefasplus-39f68.firebaseapp.com",
  projectId: "tarefasplus-39f68",
  storageBucket: "tarefasplus-39f68.firebasestorage.app",
  messagingSenderId: "329904337484",
  appId: "1:329904337484:web:19f94595a84e7a8631bae9"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export {db}