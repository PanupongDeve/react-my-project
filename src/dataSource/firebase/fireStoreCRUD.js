import { firebaseService } from '../firebase';

export class FireStoreCRUD {

    constructor(collection) {
        firebaseService.initializeApp();
        this.db = firebaseService.getFireStoreDB();
        this.collection = collection;
    }

    async create(data) {
        try {
            const responseData = await this.db.collection(this.collection).add(data);

            return responseData;
        } catch (error) {
            console.error("Error adding document: ", error);
            throw error;
        }
    }
}