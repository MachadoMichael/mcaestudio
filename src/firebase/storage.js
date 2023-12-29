
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB3pyh9FOrEVovcsIRRtze7kTiHxr3JfnE",
  authDomain: "mca-estudio.firebaseapp.com",
  projectId: "mca-estudio",
  storageBucket: "mca-estudio.appspot.com",
  messagingSenderId: "983766685863",
  appId: "1:983766685863:web:cf9b7708d616fb5c35a382",
  measurementId: "G-K1TY1REESM"
};


const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage;

export const getAllFileUrls = async (folderPath) => {
  const storageRef = ref(storage);
  const files = await listAll(storageRef);
  const urls = await Promise.all(files.items.map(async (fileRef) => {
    return getDownloadURL(fileRef)
  }))
  return urls;
}
