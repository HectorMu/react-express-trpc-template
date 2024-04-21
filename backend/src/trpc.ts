import { initTRPC } from '@trpc/server'
const t = initTRPC.create()

export const router = t.router
export const procedure = t.procedure

import { usersRouter } from './users'

export const appRouter = router({
  users: usersRouter // put procedures under "user" namespace
})

export type AppRouter = typeof appRouter
