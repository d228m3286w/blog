var React = require('react');
var rd3 = require('react-d3');

​var BarChart = rd3.BarChart;

var barData = [
  {label: 'A', value: 5},
  {label: 'B', value: 6},
  {label: 'F', value: 7}
];

var App = React.createClass({
    render: function() {
        return (
        <div>
          <h1>Hello</h1>
          return <BarChart
                  data={barData}
                  width={500}
                  height={200}
                  fill={'#3182bd'}
                  title='Bar Chart'
                />;
          
        </div>
        );
    }
});
// module.exports = App;


// var App = React.createClass({
//     render: function() {
//         return <BarChart
//                   data={barData}
//                   width={500}
//                   height={200}
//                   fill={'#3182bd'}
//                   title='Bar Chart'
//                 />;
//     }
// });
 

         
// ​        

//  module.exports = App;
