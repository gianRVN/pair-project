function exchange(params) {
    return `Rp. ${params.toLocaleString('id-ID',{})},00`
}

module.exports = exchange
