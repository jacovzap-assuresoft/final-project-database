import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import addressRouter from './routes/address.route.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api', addressRouter)

export default app
