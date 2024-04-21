import { procedure, router } from '../trpc'

export const usersRouter = router({
  getUsers: procedure.query(async () => {
    return []
  })
})
