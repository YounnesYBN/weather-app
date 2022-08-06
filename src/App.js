
import {Component} from "react";
import { Loading } from './components/loading';
import { Error } from "./components/error";
import $ from "jquery" ;
import { Main } from "./components/main";
var humidity = require('./icons/humidity.png');
var wind = require('./icons/wind.png');
var pressure = require('./icons/pressure.png');
var visible = require('./icons/visible.png');








class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      city_name : "",
      display_loading : false,
      error : null,
      city : []
    };
    this.onclickHandler = this.onclickHandler.bind(this);
    this.onchnageHandler = this.onchnageHandler.bind(this);
  }

  onchnageHandler(e){
    var ele = e.target
    this.setState({
      city_name : ele.value,
    })
  }
  onclickHandler(e){
    if(this.state.city_name.length != 0){
      console.log(this.state.city_name)
      console.log(this.state.city_name.length)
      $.ajax({
        type:"GET",
        url : "http://api.weatherapi.com/v1/forecast.json?" ,
        data : {key:"7e728b9fcd824caeb27191636220507",q:this.state.city_name,days:3},
        dataType : "JSON",
        success : (respond)=>{
            
            
            console.log(respond)
            const city_info  = {
                name : respond.location.name,
                current : {date:respond.current.last_updated ,temp_c:respond.current.feelslike_c ,temp_f:respond.current.feelslike_f ,message:respond.current.condition.text ,icon:respond.current.condition.icon ,hummidity:respond.current.humidity ,wind:respond.current.wind_kph ,pressure:respond.current.pressure_mb ,visibility:respond.current.vis_km },
                day2 : {date:respond.forecast.forecastday[1].date ,max_c:respond.forecast.forecastday[1].day.maxtemp_c,min_c:respond.forecast.forecastday[1].day.mintemp_c ,max_f:respond.forecast.forecastday[1].day.maxtemp_f,min_f:respond.forecast.forecastday[1].day.mintemp_f,message:respond.forecast.forecastday[1].day.condition.text ,icon:respond.forecast.forecastday[1].day.condition.icon ,hummidity:respond.forecast.forecastday[1].day.avghumidity ,max_wind:respond.forecast.forecastday[1].day.maxwind_kph  ,visibility:respond.forecast.forecastday[1].day.avgvis_km ,hours:respond.forecast.forecastday[1].hour},
                day3 : {date:respond.forecast.forecastday[2].date ,max_c:respond.forecast.forecastday[2].day.maxtemp_c,min_c:respond.forecast.forecastday[2].day.mintemp_c ,max_f:respond.forecast.forecastday[2].day.maxtemp_f,min_f:respond.forecast.forecastday[2].day.mintemp_f,message:respond.forecast.forecastday[2].day.condition.text ,icon:respond.forecast.forecastday[2].day.condition.icon ,hummidity:respond.forecast.forecastday[2].day.avghumidity ,max_wind:respond.forecast.forecastday[2].day.maxwind_kph  ,visibility:respond.forecast.forecastday[2].day.avgvis_km ,hours:respond.forecast.forecastday[2].hour}
                }
                
                if(this.state.city.length !== 0){
                  this.setState({
                    city : this.state.city.splice(0,1)
                   })
                }

                this.setState({
                  display_loading:false,
                  error : false,
                  city : this.state.city.concat(city_info)
                })
                console.log(this.state.city)
        },
        error : (error)=>{
          this.setState({
            display_loading:false,
            error : true
          })
          console.log(error.responseText,error.status)
        },

        beforeSend : ()=>{
          this.setState({
            display_loading:true,
            error:null
          })

        }
      
      })
    
    
  }else{
    this.setState({
      error:true
    })
    console.log(this.state.error)
  }


}
  render(){
    return (
      <div>
        <div className="container">
          <div className="row py-4">
            <div className="offset-md-4 col-md-4">
              {/*search  info*/}
                <div className=" input-group mb-3 shadow-lg p-3 mb-5 bg-body rounded ">
                    <button onClick={this.onclickHandler} className="btn btn-outline-secondary " type="button" id="button-addon1">look for weather</button>
                    <input onChange={this.onchnageHandler} type="text" className="form-control border-info" placeholder="city..."  aria-describedby="button-addon1" />
                </div>
            </div>
          </div>
        </div>
        {
        this.state.display_loading===true?<Loading />:""
        }
        {
        this.state.error == null?"":this.state.error == true ? <Error /> :<Main wind={wind} humidity={humidity} visible={visible} pressure = {pressure} city={this.state.city[0]}/>
        }
      </div>


    
    )
  }
}

export default App;

