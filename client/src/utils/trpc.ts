import { createTRPCReact } from '@trpc/react-query'

import { AppRouter } from '../../../backend/src/trpc'

export const trpc = createTRPCReact<AppRouter>()
