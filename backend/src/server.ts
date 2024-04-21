import 'dotenv/config'
import * as trpcExpress from '@trpc/server/adapters/express'
import Express from 'express'
import { SERVER_PORT } from './env'
import cors from 'cors'
import { appRouter } from './trpc'

const app = Express()

const PORT = SERVER_PORT || 3000

// created for each request
const createContext = () => ({}) // no context

// type Context = Awaited<ReturnType<typeof createContext>>

app.use(cors())
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
)

app.listen(PORT, () => {
  console.log('Running on port:', PORT)
})
