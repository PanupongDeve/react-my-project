import * as firebase from 'firebase/app'
import 'firebase/firestore';
import { environments } from '../../enviroments';


const {
    firebaseConfig
} = environments;


class FirebaseService {

    initializeApp() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log('install firebase success');
        }
    }

    getFireStoreDB() {
        return  firebase.firestore();
    }
}

export const firebaseService = new FirebaseService();