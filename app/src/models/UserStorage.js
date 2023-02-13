"use strict"

const { reduce } = require("async");
const hasOwnProperty = require("has");

class UserStorage {
    static #users = {
        id: ["parkIT", "박승민", "서지호"],
        psword: ["1234", "1234", "123456"],
        name: ["박승민","서지호","우리밋"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;