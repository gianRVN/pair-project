function formatRupiah(data){
    let temp = data.toLocaleString()
    return `Rp. ${temp}`
}

module.exports = formatRupiah