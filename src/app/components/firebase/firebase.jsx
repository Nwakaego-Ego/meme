import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk3n_GO_K74yJEMz76zC8B9CVN-F9VmJE",
  authDomain: "uploadingfile-fe9db.firebaseapp.com",
  projectId: "uploadingfile-fe9db",
  storageBucket: "uploadingfile-fe9db.appspot.com",
  messagingSenderId: "551128543925",
  appId: "1:551128543925:web:ebe92deb84006e3f6ec4fc",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
