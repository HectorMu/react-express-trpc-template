import './App.css'
import Test from './components/Test'
import { TrpcProvider } from './providers/TrpcProvider'

function App() {
  return (
    <TrpcProvider>
      <Test />
    </TrpcProvider>
  )
}

export default App
