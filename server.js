const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send("<h1>my app on heroku! - small change</h1>")
})

app.get("/data", function (req, res) {
    res.send({ Imie: "Rafał", Nazwisko: "Żmija", Klasa: "3i2", Grupa: "2" })
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
