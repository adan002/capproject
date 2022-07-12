const register = require('./db.json')
const users = []
module.exports = {
    createUser: (req, res) => {
        res.status(200).send(users)
       
        let createUser = {
            userName: userName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        users.push(newuser)
        res.status(200).send(users)
      }
}