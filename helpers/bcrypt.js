const bcrypt = require('bcryptjs')

function hashPassword(check){
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(check, salt)

    return hash
}

module.exports = { hashPassword }