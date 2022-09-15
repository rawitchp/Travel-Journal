import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Place from './components/Place'
import Data from './data/data'

function App() {
  const data = Data.map((item)=>{
    return (
      <Place 
        title={item.title}
        location={item.location}
        map={item.googleMapUrl}
        start={item.startDate}
        end={item.endDate}
        description={item.description}
        img={item.imageUrl}
      />
    )
  })
  return (
    <div className='container'>
      <NavBar />
      {data}
    </div>
  )
}

export default App