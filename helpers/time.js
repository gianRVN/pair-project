const moment = require('moment')

function formatWaktu(data){
    let temp = moment(data).format('LLL')
    return temp
}

module.exports = formatWaktu