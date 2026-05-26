import React from 'react'
import courses from '../data/courses'
import Coursecard from '../components/Coursecard'

const Home = () => {

  return <>
  <div>
    {courses.map(x=>(
        <Coursecard 
        title={x.title}
        price={x.price}
        image={x.image}
        />
    ))}
  </div>
  
  
  </>
}

export default Home