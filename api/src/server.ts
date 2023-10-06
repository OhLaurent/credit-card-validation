import Express from 'express'
import Cors from 'cors'
import { routes } from './routes'

const app = Express()

app.use(Express.json())
app.use(Cors())
app.use(routes)

const port = process.env.PORT || 3003
app.listen(port, () => console.log(`Server running on port: ${port}`))