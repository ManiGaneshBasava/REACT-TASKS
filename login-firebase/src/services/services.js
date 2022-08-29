import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const userCollectionRef = collection(db, "Users")

const contactCollectionRef = collection(db, "Contacts")


class UserDataService {

    addUsers = (newUser) => {
        return addDoc(userCollectionRef, newUser)
    }

    updateUser = (id, updateUser) => {
        const userDoc = doc(db, "Users", id);
        return updateDoc(userDoc, updateUser);
    }

    deleteUser = (id) => {
        const userDoc = doc(db, "Users", id);
        return deleteDoc(userDoc);
    }

    getAllUsers = () => {
        return getDocs(userCollectionRef)
    }

    getUser = (id) => {
        const userDoc = doc(db, "Users", id)
        return getDoc(userDoc)
    }




    addContact = (newContact) => {
        return addDoc(contactCollectionRef, newContact)
    }


    getAllContacts = () => {
        return getDocs(contactCollectionRef)
    }


    deleteContact = (id) => {
        const userDoc = doc(db, "Contacts", id);
        return deleteDoc(userDoc);
    }

    getContact = (id) => {
        const userDoc = doc(db, "Contacts", id)
        return getDoc(userDoc)
    }

    updateContact = (id, updateContact) => {
        const userDoc = doc(db, "Contacts", id);
        return updateDoc(userDoc, updateContact);
    }




}

export default new UserDataService();