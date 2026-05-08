import express from 'express'
const app = express()
import { errorMiddleware } from './middlewares/error.middleware'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes'
import productRoutes from './routes/product.routes'

app.use(cookieParser())
app.use(express.json())

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/product', productRoutes)

app.get('/', (req, res) => {
  res.json({ ok: true })
})

app.use(errorMiddleware)

export default app
