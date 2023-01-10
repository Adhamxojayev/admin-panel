import express from 'express'
import fileUpload from 'express-fileupload'
import { PORT  } from './config.js'

import modules from './modules/index.js'

const app = express()


app.use(express.json())
app.use(fileUpload())

app.use(modules)

app.listen(PORT, () => console.log('server ready at ', PORT))