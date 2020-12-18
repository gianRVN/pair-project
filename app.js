const routes = require('./routes/router')
const express = require('express')
const app = express()
const port = 3000
const rupiah = require('./helpers/rupiah.js')
const waktu = require('./helpers/time.js')
const waktuLimit = require('./helpers/limit.js')
const session = require('express-session')

app.use(session({
    secret: 'apaan ini',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))

app.locals.formatRupiah = rupiah

app.locals.formatWaktu = waktu

app.locals.formatWaktuLimit = waktuLimit

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false}))

app.use(routes)


app.listen(port, () => {
    console.log(`server is listen on port : ${port}`)
})