import { firebase, googleProvider, emailProvider} from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        firebase.auth().signInWithPopup(googleProvider);
    }
}


export const startEmailLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}

export const logOut= () => ({
    type: 'LOGOUT'
});

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
}