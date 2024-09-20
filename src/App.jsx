import React from 'react'
import './App.css'
import ParentComponent from './components/parentComponent'
import Nature from './components/Nature'
import PackingList from './components/PackingList'
function App() {

  return (
    <>
      <h1>Hello !!</h1>
      <ParentComponent/>
      <Nature/>
      <PackingList message="Now I'm learning ReactJS!" />
    </>
  )
}

export default App
