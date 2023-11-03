import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import addressRouter from './routes/address.route.js'
import storeRouter from './routes/store.route.js'
import salaryRouter from './routes/salary.route.js'
import catalogueRouter from './routes/catalogue.route.js'
import juridicalCustomerRouter from './routes/juridicalCustomer.route.js'
import modelsRouter from './routes/models.route.js'
import vehiclesRouter from './routes/vehicle.route.js'
import reservesRouter from './routes/reserve.route.js'
import customerContactRouter from './routes/customerContact.route.js'
import physicalCustomerRouter from './routes/physicalCustomer.route.js'
import commissionRouter from './routes/commission.route.js'
import paymentRouter from './routes/payment.route.js'
import saleRouter from './routes/sale.route.js'
import payment_detailRouter from './routes/payment_detail.route.js'
import stockRouter from './routes/stock.route.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/address', addressRouter)
app.use('/store', storeRouter)
app.use('/salary', salaryRouter)
app.use('/catalogue', catalogueRouter)
app.use('/juridical-customer', juridicalCustomerRouter)
app.use('/model', modelsRouter)
app.use('/vehicle', vehiclesRouter)
app.use('/reserve', reservesRouter)
app.use('/customer-contact', customerContactRouter)
app.use('/physical-customer', physicalCustomerRouter)
app.use('/commission', commissionRouter)
app.use('/stock', stockRouter)
app.use('/sale', saleRouter)
app.use('/payment', paymentRouter)
app.use('/payment_detail', payment_detailRouter)

export default app
