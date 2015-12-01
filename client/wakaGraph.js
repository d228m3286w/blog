
var React = require('react');
var Chart = require('chart.js');
// var WakaBox = require('./waka');  
// var languages = require(WakaBox);



var App = React.createClass({
    render: function() {
      var data = {
    labels: ["JavaScript", "HTML", "CSS", "JSON"],
    datasets: [
      
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [20,4,5,8,57,3]
        }
    ]
};
      var ctx = document.getElementById("myChart").getContext("2d");
      var myRadarChart = new Chart(ctx).Radar(data);
        return (
        <div>
          <h1>Hello</h1>
          
        </div>
        );
    }
});

// module.exports = App;