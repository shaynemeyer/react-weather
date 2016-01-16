var React = require('react');

var iconStyle = {
 fontSize:18
};

var tdStyle = {
  verticalAlign: "middle",
  borderTop: "0 solid white",
  borderBottom: "1px solid white"
};

var parseIcon = function(iconText) {
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

var FutureWeatherListItem = React.createClass({
    render: function(){
        return (
            <tr>
              <td style={tdStyle}><h5>{this.props.date}</h5></td>
              <td style={tdStyle}><i className={parseIcon(this.props.icon)} style={iconStyle}></i></td>
              <td style={tdStyle}><h5 className="pull-right">{Math.round(this.props.temp)} °F</h5></td>
            </tr>
        );
    }
});

module.exports = FutureWeatherListItem;
