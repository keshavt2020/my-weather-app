const express = require("express")

const app = express()

app.get('/',  (req, res) => {
    res.send('Hello Weather')
  })


  app.get('*',  (req, res) => {
    res.send('Page Not Found')
  })


  app.listen(3000, () => {
    console.log('Express Server Started')
}) 