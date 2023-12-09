import { usersMongo } from '../daos/users.mongo.js';
import { cartsMongo } from '../daos/carts.mongo.js';
import { hashData } from '../utils.js';
import config from '../config/config.js';

class UsersService {
    async findAll() {
        const response = await usersMongo.findAll();
        return response;
    }

    async findByEmail(email) {
        const response = await usersMongo.findByEmail(email);
        return response;
    }

    async createOne(obj) {
        const { email, password } = obj;
        const hashedPass = await hashData(password);
        const response = await usersMongo.createOne({ ...obj, password: hashedPass });
        return response;
    }

    async updateOne(obj) {
        const { id, ...userData } = obj;
        const response = await usersMongo.updateOne(id, userData);
        return response;
    }

    async deleteOne(id) {
        const response = await usersMongo.deleteOne(id);
        return response;
    }
}

export const usersService = new UsersService();