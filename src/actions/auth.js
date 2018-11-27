import { firebase, googleProvider, emailProvider} from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleProvider);
    }
}


export const startEmailLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}


export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
}