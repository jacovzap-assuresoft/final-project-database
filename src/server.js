import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import addressRouter from './routes/address.route.js'
import storeRouter from './routes/store.route.js'
import customerContactRouter from './routes/customerContact.route.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/address', addressRouter)
app.use('/store', storeRouter)
app.use('/customer-contact', customerContactRouter)

export default app
