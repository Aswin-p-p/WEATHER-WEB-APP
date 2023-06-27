import React from 'react'
import './Content2.css'
function Content2({data}) {
  return (
    <>
    {data.map((data)=>(
      <div className='main'>
          <div className='div' >
         <div className='box3'>
    <h3 align='center' style={{color:'yellow'}}>{data.main}</h3>
          <p align='center'>{data.htemp}c-{data.Itemp}c</p>
           <p align='center'>{data.desc}</p>    
         </div>
    </div>
    </div>

 ) )}

    </>
  )
}

export default Content2