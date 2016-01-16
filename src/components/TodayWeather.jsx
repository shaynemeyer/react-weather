var React = require('react');

var mainIcon = {
    fontSize: 48
};

var mainContent = {
  marginTop:30
};

var secondaryContent = {
  fontSize: 22,
  marginRight: 10
};

var subMargin = {
  marginTop: 20
};

var smallText = {
  fontSize: 10,
  display: "inline-block"
};

var windPos = {
  
};

var clockIcon = {
  marginRight: 5
};

var subHeadStyle = {
  fontSize: 10
}

var tempStyle = {
  marginTop: 5
}

var parseWind = function(deg){
  var angle = deg;
  var wind = {
    direction: "",
    compassClass: ""
  };

  if(angle >= 0 && angle <= 22.5 || angle > 337.5 && angle <= 360){
    // North
    wind.direction = "NORTH";
    wind.compassClass = "wi wi-wind wi-from-n";
  } else if(angle > 22.5 && angle <= 67.5){
    // North East
    wind.direction = "NORTH EAST";
    wind.compassClass = "wi wi-wind wi-from-ne";
  } else if(angle > 67.5 && angle <= 112.5){
    // East
    wind.direction = "EAST";
    wind.compassClass = "wi wi-wind wi-from-e";
  } else if(angle > 112.5 && angle <= 157.5){
    // South East
    wind.direction = "SOUTH EAST";
    wind.compassClass = "wi wi-wind wi-from-se";
  } else if(angle > 157.5 && angle <= 202.5){
    // South
    wind.direction = "SOUTH";
    wind.compassClass = "wi wi-wind wi-from-s";
  } else if(angle > 202.5 && angle <= 247.5){
    // South West
    wind.direction = "SOUTH WEST";
    wind.compassClass = "wi wi-wind wi-from-sw";
  } else if(angle > 247.5 && angle <= 292.5){
    // West
    wind.direction = "WEST";
    wind.compassClass = "wi wi-wind wi-from-w";
  } else if(angle > 292.5 && angle <= 337.5){
    // North West
    wind.direction = "NORTH WEST";
    wind.compassClass = "wi wi-wind wi-from-nw";
  }

  return wind;
};

var parseIcon = function(iconText){
  var icon = "wi ";

  if (iconText == "01d") {
    icon += "wi-day-sunny";
  } else if (iconText == "02d") {
    icon += "wi-day-cloudy";
  } else if (iconText == "03d") {
    icon += "wi-cloud";
  } else if (iconText == "04d") {
    icon += "wi-cloudy";
  } else if (iconText == "09d") {
    icon += "wi-rain";
  } else if (iconText == "10d") {
    icon += "wi-day-rain";
  } else if (iconText == "11d") {
    icon += "wi-thunderstorm";
  } else if (iconText == "13d") {
    icon += "wi-snow";
  } else if (iconText == "50d") {
    icon += "wi-windy";
  } else if (iconText == "01n") {
    icon += "wi-night-clear";
  } else if (iconText == "02n") {
    icon += "wi-night-alt-cloudy";
  } else if (iconText == "03n") {
    icon += "wi-cloud";
  } else if (iconText == "04n") {
    icon += "wi-cloudy";
  } else if (iconText == "09n") {
    icon += "wi-rain";
  } else if (iconText == "10n") {
    icon += "wi-night-alt-rain";
  } else if (iconText == "11n") {
    icon += "wi-thunderstorm";
  } else if (iconText == "13n") {
    icon += "wi-snow";
  } else if (iconText == "50n") {
    icon += "wi-windy";
  }
  return (icon);
};

var parseMonth = function(month){
  var monthInWords;
  if (month == "01") {
    monthInWords = "JAN"
  } else if (month == "02") {
    monthInWords = "f0eb"
  } else if (month == "03") {
    monthInWords = "MAR"
  } else if (month == "04") {
    monthInWords = "APR"
  } else if (month == "05") {
    monthInWords = "MAY"
  } else if (month == "06") {
    monthInWords = "JUN"
  } else if (month == "07") {
    monthInWords = "JUL"
  } else if (month == "08") {
    monthInWords = "AUG"
  } else if (month == "09") {
    monthInWords = "SEP"
  } else if (month == "010") {
    monthInWords = "OCT"
  } else if (month == "11") {
    monthInWords = "NOV"
  } else if (month == "12") {
    monthInWords = "DEC"
  }
  return monthInWords;
};

var TodayWeather = React.createClass({
    render: function(){
        return (
            <div id="today-weather-box" className="row">
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-12">
                    <h5>{this.props.city}, {this.props.country}</h5>
                    <div style={subHeadStyle}>
                    TODAY {this.props.date.substring(8, 10)} {parseMonth(this.props.date.substring(5, 7))} {this.props.date.substring(0,4)}
                    </div>
                  </div>
                </div>
                <div className="row" style={mainContent}>
                  <div className="col-xs-4 col-xs-offset-2 text-center">
                    <i className={parseIcon(this.props.icon)} style={mainIcon}></i>

                  </div>
                  <div className="col-xs-5 text-center">
                    <h1 style={tempStyle}>{Math.round(this.props.temp)}° F</h1>
                  </div>
                </div>
                <div className="row" style={subMargin}>
                    <div className="col-xs-6 text-center" style={windPos}>
                      <i className={parseWind(this.props.windAngle).compassClass} style={secondaryContent}></i>
                      <div style={smallText}>{parseWind(this.props.windAngle).direction}</div>
                    </div>
                    <div className="col-xs-6 text-center" style={windPos}>
                      <i className="wi wi-strong-wind" style={secondaryContent}></i>
                      <div style={smallText}>{Math.round(this.props.windSpeed)} MPH</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});

module.exports = TodayWeather;
