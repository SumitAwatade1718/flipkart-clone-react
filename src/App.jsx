import { useState } from 'react'
import Header from './Header'
import CategoryBar from './CategoryBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CategoryBar />
    </>
  )
}

export default App
