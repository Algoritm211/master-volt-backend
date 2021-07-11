const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const consola = require('consola')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
dotenv.config()
const PORT = process.env.PORT || 5000
const userRouter = require('./routes/user.routes')

const app = express()

app.use(cors({
  credentials: true,
  origin: ['http://p980114v.beget.tech/'],
}))
app.options('*', cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api/user/', userRouter)

const start = async () => {
  try {
    const dbURL = process.env.dbURL
    await mongoose
      .connect(dbURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        tls: true,
      })
    consola.success('Database connected')
    app.listen(PORT, () => {
      consola.success(`Server started on http://localhost:${PORT}`)
    })
  } catch (error) {
    consola.error(error)
  }
}

start()
