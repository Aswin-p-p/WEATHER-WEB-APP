import React, { useState } from 'react'
import axios from "axios"
import './home.css'
import Loader from '../Loader/Loader'
import Mainpage from '../../pages/mainpage/Mainpage'


function Home() {
  const [data,cityDetails] = useState({
      value:'',
      current:{},
      weekInfo:[],
      loading:false,
      error:false,
    
  })


const change = (e)=>{
 cityDetails({
  ...data,
  value: e.target.value,
 })




}

const sub = (e)=>{

  e.preventDefault()
  cityDetails({

    ...data,
    loading: true,
  })
  axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${data.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a#`)
.then(response =>{
  console.log("resoponse========>",response)
  const data = response.data // the response datas stored into data_variable

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = [  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
   
  const currentDate = new Date()
  
  console.log('currentDate-------->' ,currentDate);
  console.log('currentdays-------->',currentDate.getDay());
  const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${month[currentDate.getMonth()]}`;
  console.log("date-------->", date);
  
  const sunset = new Date(data.list[0].sunset * 1000).toLocaleTimeString().slice(0,4)
  const sunrise = new Date(data.list[0].sunrise * 1000).toLocaleTimeString().slice(0,4)
  
  const current = {
    city : data.city.name,
    country: data.city.country,
    date : date,
    population : data.city.population,
    desc : data.list[0].weather[0].description, 
    main: data.list[0].weather[0].main,
    icon: data.list[0].weather[0].icon,
    temp: data.list[0].temp,
    htemp: data.list[0].temp.max,
    Itemp: data.list[0].temp.min,
    sunrise : sunrise,
    sunset : sunset,
    clouds : data.list[0].clouds,
    humidity : data.list[0].humidity,
    wind : data.list[0].speed,
    pressure : data.list[0].pressure,
  }
  console.log("current-------->",current);
  
  const weekData = data.list
console.log('weeekData-------->',weekData);
 //whats..............................????????????????????????????
  const weekInfo = weekData.map((data,index) => {
    return {
      key :  index,
      main : new Date(data.dt * 1000).toLocaleString('en-US',{weekday: 'long', year:'2-digit',month:'long',day:'numeric'}).slice(0,3),
      desc : data.weather[0].description,
      icon : data.weather[0].icon,
      htemp : data.temp.max,
      Itemp : data.temp.min,
    }
  })
  console.log('weekinfo-------->>',weekInfo);
  
  //const weekinfo + weekinfp.slice(0,7)
  
  
  cityDetails({
    ...data,
    current,
    weekInfo,
    loading: false,
    error : false
  })

}).catch((err)=>{
  console.log("error====>",err);
  cityDetails({
    ...data,
    loading: false,
    error : true,
    current : {},
    weekInfo : []

  })

})
}

  return (
    <>
    <div>
      <nav class="navbar bg-body-tertiary ">
  <div class="container-fluid    p-3 mb-2 bg-info text-dark ">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" name='city' onChange={change} placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" onClick={sub} type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>

{
  data.loading === true ?
  <Loader/>
  :
  <div>
    {data.current.country !== undefined ?
  
  <div >
    <Mainpage today = {data.current} weekly = {data.weekInfo} />
    </div>
    :
    data.error ?
<p style={{color:"red"}}>sorry! we do not have any information on specified location.</p>
:

<div>
</div>
        
    }
  </div>

  }
</>

  )



 
}




export default Home