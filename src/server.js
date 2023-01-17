import express from 'express'
import fileUpload from 'express-fileupload'
import { PORT  } from './config.js'

import modules from './modules/index.js'
import auth from './middleware/auth.js'

const app = express()
app.use(express.json())
app.use(fileUpload())


app.get('/', (_, res) => res.send('<h2>Node application</h2>'))

app.use(auth, modules)

app.use('*', (_, res) => {
  res.status(404).send('<h2>404</h2>');
})

app.listen(PORT, () => console.log('server ready at ', PORT))