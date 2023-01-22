const connectToMongo = require("./db");
const express = require('express')
const app = express()
const port = 5000
connectToMongo()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/code',require('./routes/code'));
app.use('/api/question',require('./routes/question'));

app.listen(port, () => {
  console.log(`OCP app listening on port ${port}`)
})
