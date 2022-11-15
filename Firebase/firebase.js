import firebase from "firebase/app";

const firebaseConfig = {
  // firebaseをimportしています
  apiKey: "AIzaSyCDSS0rDyF3FyiQamEMY8eAoODHWCMIm8o",
  authDomain: "spla3dbnext.firebaseapp.com",
  projectId: "spla3dbnext",
  storageBucket: "spla3dbnext.appspot.com",
  messagingSenderId: "364464183723",
  appId: "1:364464183723:web:4d4539b6f85d752ace9aee",
  measurementId: "G-LNVT2B2GK5",
};
// Firebaseのインスタンスが存在しない場合にのみ、インスタンスを作成します
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
