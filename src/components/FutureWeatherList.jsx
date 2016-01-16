var React = require('react');
var FutureWeatherListItem = require('./FutureWeatherListItem.jsx');

var rowStyle = {
 paddingLeft: 15,
 paddingRight: 15
};

var parseMonth = function(month){
  var monthInWords;
  if (month == "01") {
    monthInWords = "Jan"
  } else if (month == "02") {
    monthInWords = "Feb"
  } else if (month == "03") {
    monthInWords = "Mar"
  } else if (month == "04") {
    monthInWords = "Apr"
  } else if (month == "05") {
    monthInWords = "May"
  } else if (month == "06") {
    monthInWords = "Jun"
  } else if (month == "07") {
    monthInWords = "Jul"
  } else if (month == "08") {
    monthInWords = "Aug"
  } else if (month == "09") {
    monthInWords = "Sep"
  } else if (month == "010") {
    monthInWords = "Oct"
  } else if (month == "11") {
    monthInWords = "Nov"
  } else if (month == "12") {
    monthInWords = "Dec"
  }
  return monthInWords;
};

var FutureWeatherList = React.createClass({
  render: function(){
    var futureWeatherListItem = this.props.tempList.map(function(item, key) {
        // dig out the forecast for noon
        if (item.dt_txt.substring(11, 13) == "12") {
            return (
              <div key={key}>
                <FutureWeatherListItem
                    date={item.dt_txt.substring(8, 10)
                      + " " + parseMonth(item.dt_txt.substring(5,7))}
                    temp={item.main.temp}
                    icon={item.weather[0].icon} />
              </div>
            );
        }
    });

    return (
        <div className="row future-weather-list">
          <div className="col-xs-12" style={rowStyle}>
            <table className="table table-striped">
              {futureWeatherListItem}
            </table>
          </div>
        </div>
    );
  }
});

module.exports = FutureWeatherList;
