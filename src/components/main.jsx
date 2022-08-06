import { Component } from "react";
// import {Forcast} from './components/Forcast';


class Main extends Component {
    constructor(props){
        super(props)
    }
    render(){
      const {wind,humidity,pressure,visible,city} = this.props
      console.log("prop: ",city)
        return(
        <div className="container-fluid">
            <div className="row">
                <div id="ele-1" className="col-md-4 card">
                  <img src="https://pixy.org/src/487/4870083.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <p className="text-mute text-secondary">{city.current.date}</p>
                    <h1 className="card-title text-light" id="place">{city.name}</h1>
                    <div className="row"><h3 className="col-6 card-text text-center text-success">{city.current.temp_c}C</h3><h3 className="col-6 card-text text-center text-success">{city.current.temp_f}F</h3></div>
                    <div className="row"><h3 className="col-12 card-text text-center text-light" id="message">{city.current.message}<img src={city.current.icon} alt="" width="60px" height="60px"/></h3></div>
                    <div className="container shadow-lg p-3 mb-5 bg-body rounded w-75" id="info-ele-1">
                      <div className="row"><p className="col-6 text-center">HUMIDITY:</p> <p className="col-6 text-center" >{city.current.hummidity}% <img src={humidity} height="30px" width="30px"/></p></div>
                      <div className="row"><p className="col-6 text-center">WIND:</p> <p className="col-6 text-center" >{city.current.wind} km/h <img src={wind} height="30px" width="30px"/></p> </div>
                      <div className="row"><p className="col-6 text-center">PRESSURE:</p> <p className="col-6 text-center" >{city.current.pressure} mb <img src={pressure} height="30px" width="30px"/></p> </div>
                      <div className="row"><p className="col-6 text-center">VISIBILITY:</p> <p className="col-6 text-center" >{city.current.visibility} km <img src={visible} height="30px" width="30px"/></p> </div>
                    </div>
                  </div>
                </div>
                <div id="ele-2" className="col-md-8 card">
                  <div className="card-body">
                    <h5 className="card-title">Forcast for next two days: </h5>

                    <div id="forcast-con" className="row">

                      {/*------------------------------------------------------------------------------------*/}
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                              <h5 className="card-title">{city.day2.date}</h5>
                              <h3 className="row"><span className="col-md-12 text-center">{city.day2.message}<img src={city.day2.icon} height="50px" width="50px"/></span></h3>
                              <h2 className="row card-text">
                                <span className="col-6"> Max: {city.day2.max_c}C/{city.day2.max_f}F</span>
                                <span className="col-6"> Min: {city.day2.min_c}C/{city.day2.min_f}F</span>
                              </h2>
                              <div className="row card-text shadow-lg p-3 mb-3 bg-body rounded">
                                <p className="col-4" id="bor-right">Humidity: <span> {city.day2.hummidity}% </span><img src={humidity} height="30px" width="30px"/></p>
                                <p className="col-4" id="bor-right">Max Wind: <span>{city.day2.max_wind}km/h </span><img src={wind} height="30px" width="30px" /></p>
                                <p className="col-4">Visibility: <span>{city.day2.visibility}km </span> <img src={visible} height="30px" width="30px"/></p>
                              </div>
                              <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                weather in 24h 
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                  {
                                  city.day2.hours.map((hour,index)=>{
                                    var bg="dark";
                                    var cl = "light"
                                    var time = hour.time.split(" ")[1]
                                    var tepm_c = hour.feelslike_c
                                    var temp_f = hour.feelslike_f
                                    if(index % 2 ==0 ){
                                      bg = "light"
                                      cl = "dark"
                                    }
                                      return <li><button className={`dropdown-item bg-${bg} text-${cl}`} disabled type="button"><em>time:{time}</em> {tepm_c}C/{temp_f}F</button></li>
                                  })
                                }
                                </ul>
                              </div>
                            </div>
                        </div>
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                              <h5 className="card-title">{city.day3.date}</h5>
                              <h3 className="row"><span className="col-md-12 text-center">{city.day3.message}<img src={city.day3.icon} width="50px" height="50px "/></span></h3>
                              <h2 className="row card-text">
                                <span className="col-6"> Max: {city.day3.max_c}C/{city.day3.max_f}F</span>
                                <span className="col-6"> Min: {city.day3.min_c}C/{city.day3.min_f}F</span>
                              </h2>
                              <div className="row card-text shadow-lg p-3 mb-3 bg-body rounded">
                                <p className="col-4" id="bor-right">Humidity: <span> {city.day3.hummidity}% </span> <img src={humidity} height="30px" width="30px"/></p>
                                <p className="col-4" id="bor-right">Max Wind: <span>{city.day3.max_wind}km/h </span> <img src={wind} height="30px" width="30px" /></p>
                                <p className="col-4">Visibility: <span>{city.day3.visibility}km </span> <img src={visible} height="30px" width="30px"/></p>
                              </div>
                              <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                  weather in 24h 
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                {
                                  city.day3.hours.map((hour,index)=>{
                                    var bg="dark";
                                    var cl = "light"
                                    var time = hour.time.split(" ")[1]
                                    var tepm_c = hour.feelslike_c
                                    var temp_f = hour.feelslike_f
                                    if(index % 2 ==0 ){
                                      bg = "light"
                                      cl = "dark"
                                    }
                                      return <li><button className={`dropdown-item bg-${bg} text-${cl}`} disabled type="button"><em>time:{time}</em> {tepm_c}C/{temp_f}F</button></li>
                                  })
                                }
                                </ul>
                              </div>
                            </div>
                        </div>  
                      {/*------------------------------------------------------------------------------------*/}

                    </div>
                  </div>
                </div>
            </div>
        </div>
        )
    }
}
export {Main}