const express = require("express")

const app = express()
const port = process.env.PORT || 3000

app.get('/',  (req, res) => {
    res.send('Hello Weather')
  })


  app.get('*',  (req, res) => {
    res.send('Page Not Found')
  })


  app.listen(port, () => {
    console.log('Express Server Started and Listening on port ' + port)
}) 