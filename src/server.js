import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import addressRouter from './routes/address.route.js'
import storeRouter from './routes/store.route.js'
import modelsRouter from './routes/models.route.js'
import vehiclesRouter from './routes/vehicle.route.js'
import reservesRouter from './routes/reserve.route.js'
import paymentRouter from './routes/payment.route.js'
import saleRouter from './routes/sale.route.js'
import paymentRouter from './routes/payment.route.js'
import stockRouter from './routes/stock.route.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/address', addressRouter)
app.use('/store', storeRouter)
app.use('/model', modelsRouter)
app.use('/vehicle', vehiclesRouter)
app.use('/reserve', reservesRouter)
app.use('/stock', stockRouter)
app.use('/sale', saleRouter)
app.use('/payment', paymentRouter)

export default app
