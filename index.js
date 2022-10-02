const userRoute = require('./route');

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
