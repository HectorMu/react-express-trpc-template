import { trpc } from '../utils/trpc'

export default function Test() {
  const xd = trpc.users.getUsers.useQuery()

  return <div>{JSON.stringify(xd.data)}</div>
}
