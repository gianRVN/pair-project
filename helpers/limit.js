const moment = require('moment')

function waktuLimit(data){
    let date = new Date()
    let output = data.setDate(date.getDate())
    let cek = moment(output).format('LLL')
    return cek
}

module.exports = waktuLimit