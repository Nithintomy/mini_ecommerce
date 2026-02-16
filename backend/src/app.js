
import express, { Router } from 'express'
import cors from 'cors'
import { errorHandler } from './middleware/error.middleware.js'
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'

const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/auth', authRoutes)
// app.use('/api/user')
app.use('/api/products',productRoutes)
// app.use('/api/order')

app.use(errorHandler)


export default app