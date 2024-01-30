import React, { useState } from 'react'
import axios from 'axios'

// import img from './Assets/sky.jpg'
function Weather() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const baseKey = '98f0e7a969372fd8452830fcef1332c0';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const getWeatherData = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: city,
          appid: baseKey,
          
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

 
  return (
    <div className='weather'>



             <div className="row">
              <div className="col"></div>
              <div className="col">

              <div className='' style={{width:'500px', marginTop:'80px'}}>
          <input type="text" placeholder='Place' value={city} className='form-control' name="" id="" onChange={(e) => setCity(e.target.value)} />

          <div className='text-center mt-5 '>
            <button onClick={getWeatherData} className='btn text-black'><b>Search</b></button>
          </div>
          {weatherData && (

          <div className='text-center  mt-5'>
            <h1 className='text-dark'><b>{weatherData.name},{weatherData.sys.country}</b></h1>

              <div className='align-items-center justify-content-center d-flex mt-2'>
              <h1 className='text-dark text-center mt-2' style={{fontSize:'100px'}} ><b>{weatherData.main.temp}</b></h1>
              <h3 style={{fontSize:'50px'}} className='text-dark'><b>&#730;K</b></h3>
              </div>

             
          </div>
          )}
        </div>

              </div>
              <div className="col"></div>
            </div>
            

            <div style={{}} className='d-flex justify-content-center'>
            {weatherData &&(

<div style={{width:'1000px', marginLeft:''}} className='d-flex align-item-center justify-content-evenly mt-3'>
     <div>
        <h4 className='text-light'><b>max: {weatherData.main.temp_max} &deg;C</b></h4>
        <h4 className='text-light'><b>min: {weatherData.main.temp_min} &deg;C</b></h4>
        
     </div>
     <div>
        <h3 className='text-center text-light'><b>Wind <span><i class="fa-solid fa-wind fs-3 "></i></span></b></h3>
        <h4 className='text-light'><b>speed: {weatherData.wind.speed} mph</b></h4>
        
        
        
     </div>
     <div>
        <h4 className='text-light'><b>pressure: {weatherData.main.pressure} pa</b></h4>
        <h4 className='text-light'><b>humidity: {weatherData.main.humidity} q</b></h4>
        
     </div>


  </div> )}
            </div>
          
     
    </div>
  )
}

export default Weather