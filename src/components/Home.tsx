import React from 'react'
import Article from './Article'
import LearningCoding from './LearningCoding'
import NavBar from './NavBar'
import Partners from './Partners'
// import ParentDiv from './ParentDiv'
import Section from './Section'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Section/>
        <Article/>
        <Partners/>
        <LearningCoding/>
    </div>
  )
}

export default Home