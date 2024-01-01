
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

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
const db = getFirestore(firebaseApp);

// Function to add a new photo to the Firestore database
const addPhotoToFirestore = async (photoData) => {
  try {
    const photosCollection = collection(db, 'photos');
    const docRef = await addDoc(photosCollection, photoData);
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

// Function to get all photos from the Firestore database
const getAllPhotosFromFirestore = async () => {
  try {
    const photosCollection = collection(db, 'photos');
    const querySnapshot = await getDocs(photosCollection);
    const photos = [];
    querySnapshot.forEach((doc) => {
      photos.push({ id: doc.id, ...doc.data() });
    });
    return photos;
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

// Function to update a photo in the Firestore database
const updatePhotoInFirestore = async (photoId, updatedData) => {
  try {
    const photoDocRef = doc(db, 'photos', photoId);
    await updateDoc(photoDocRef, updatedData);
    console.log('Document updated successfully');
  } catch (error) {
    console.error('Error updating document: ', error);
  }
};

// Function to delete a photo from the Firestore database
const deletePhotoFromFirestore = async (photoId) => {
  try {
    const photoDocRef = doc(db, 'photos', photoId);
    await deleteDoc(photoDocRef);
    console.log('Document deleted successfully');
  } catch (error) {
    console.error('Error deleting document: ', error);
  }
};

export {
  storage,
  addPhotoToFirestore,
  getAllPhotosFromFirestore,
  updatePhotoInFirestore,
  deletePhotoFromFirestore
};

export const getAllFileUrls = async (folderPath) => {
  const storageRef = ref(storage);
  const files = await listAll(storageRef);
  const urls = await Promise.all(files.items.map(async (fileRef) => {
    return getDownloadURL(fileRef)
  }))
  return urls;
}
