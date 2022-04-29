const db = require('../dbConfig');

class User {
    constructor(data){
        this.username = data.username
        this.score = data.score
    }
    static get all(){
        return new Promise(async (resolve,reject) => {
            try {
                const allUserData = await db.query(`SELECT * FROM users;`);
                let allUsers = allUserData.rows.map(u => new User(u));
                resolve(allUsers)
            } catch (error) {
                reject('Cannot retrieve all users');
            }
        })
    }
}

module.exports = User;
