import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreCarModel from '../../components/ExploreCarModel/ExploreCarModel'
import CarDisplay from '../../components/CarDisplay/CarDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [ category, setCategory ] = useState("All")

  return (
    <div>
      <Header />
      <ExploreCarModel category={category} setCategory={setCategory} />
      <CarDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
