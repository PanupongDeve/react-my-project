import { FireStoreCRUD } from '../../dataSource/firebase/fireStoreCRUD';

class FirebaseTestRepository {
    constructor() {
        this.users = new FireStoreCRUD('users');
    }


    async create() {
        const data = await this.users.create({
            first: "Alan",
            middle: "Mathison",
            last: "Turing",
            born: 1912
        })
        console.log(data);
    }

}

export const firebaseTestRepository = new FirebaseTestRepository();