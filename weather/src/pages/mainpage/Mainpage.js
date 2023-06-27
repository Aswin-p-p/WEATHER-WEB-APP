import React from 'react';
import './mainpage.css';
import Home from '../../Components/home/Home'
import Content from '../../Components/content/Content'
import Content2 from '../../Components/content2/Content2'


function Mainpage({today,weekly}) {
  return (
   
    <>
   
     <Content data={today}/>
     <Content2 data={weekly}/>
     
    </>
  )
}

export default Mainpage