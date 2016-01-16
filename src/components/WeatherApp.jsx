var React = require('react');

var HTTP = require('../services/httpservice');

var TodayWeather = require('./TodayWeather.jsx');
var FutureWeatherList = require('./FutureWeatherList.jsx');

var divStyle = {

};

var panelStyle = {

};

var headerStyle = {
  backgroundColor: "#357db5",
  color: "white"
};

var WeatherApp = React.createClass({
   getInitialState:function(){
       return (
           {
               weather: []
           }

       );
   },
   componentWillMount: function(){
        //Sends an request to OpenWeatherAPI with the default city "Seattle"
       HTTP.get('/data/2.5/forecast?q=Seattle,wa&units=imperial&APPID=00b820f2292a5a0af564266633356435').then(function(data){
           this.setState({weather:[data]});
           console.log(data);
       }.bind(this));
       //IMPORTNAT to bind to this (.bind(this)) because if not, this will refer to the function and not the React component "WeatherApp"
   },
   render: function() {
       var todayWeather = this.state.weather.map(function(item, key){
         return(
           <TodayWeather
              key={key}
              city={item.city.name}
              country={item.city.country}
              date={item.list[0].dt_txt}
              temp={item.list[0].main.temp}
              windSpeed={item.list[0].wind.speed}
              windAngle={item.list[0].wind.deg}
              icon={item.list[0].weather[0].icon} />
         );
       });
       var futureWeatherList = this.state.weather.map(function(item, key){
         return (
           <FutureWeatherList
              key={key}
              tempList={item.list}
              icon={item.list} />
         );
       });

       return (
         <div style={divStyle} className="col-sm-4">
           <div style={panelStyle} className="panel">
             <div style={headerStyle} className="panel-heading">
              {todayWeather}
             </div>
             <div className="row panel-body">
              {futureWeatherList}
             </div>
           </div>
         </div>
       );
   }
});

module.exports = WeatherApp;
