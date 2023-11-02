import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import addressRouter from './routes/address.route.js'
import storeRouter from './routes/store.route.js'
import catalogueRouter from './routes/catalogue.route.js'
import employeeRouter from './routes/employee.route.js'
import employeeContactRouter from './routes/employeeContact.route.js'
import salaryRouter from './routes/salary.route.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/address', addressRouter)
app.use('/store', storeRouter)
app.use('/catalogue', catalogueRouter)
app.use('/employee', employeeRouter)
app.use('/employee_contact', employeeContactRouter)
app.use('/salary', salaryRouter)

export default app
