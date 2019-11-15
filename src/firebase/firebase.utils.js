import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC_0QV09KiQ3oS4ZvyrFtLM6VICbogpx7s",
    authDomain: "crwn-db-c1d4a.firebaseapp.com",
    databaseURL: "https://crwn-db-c1d4a.firebaseio.com",
    projectId: "crwn-db-c1d4a",
    storageBucket: "crwn-db-c1d4a.appspot.com",
    messagingSenderId: "833455447346",
    appId: "1:833455447346:web:4d1b7c4bc1da4d116e4b2b",
    measurementId: "G-1PR9D0B2ZV"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase