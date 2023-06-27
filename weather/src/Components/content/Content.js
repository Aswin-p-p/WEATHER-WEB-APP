import React from 'react'
import './Content.css'

function Content({data}) {
  return (
    <div class='container'>
        
        <div className='box1'>
            <h2 align='center'>{data.city},{data.country}</h2>
           <p align='center'>{data.date}</p>
           <p align='center'> population:{data.population}</p>
        </div>

      <div className='box2'>
        <div className='cnt'>
        <h1 align='center'> temp: {data.htemp} c</h1>
        <p align='center'>{data.desc}</p>
        </div>

        </div>  
       


    </div>
  )
}

export default Content