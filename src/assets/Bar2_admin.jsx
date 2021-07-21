import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Bar2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: 'Duração',
        data: [4, 10, 23, 21, 16, 11, 15]
     
      }],
      options: {
        colors: ['#FCDB35'], 

        chart: {
          type: 'bar',
         
          height: 350,
          offsetX: 30,
          toolbar: {
            show: false,
          }


        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        },
        yaxis: {

          min: 0,
          max: 30,

          title: {

            text: 'Duração',
            
            offsetX: -10,
            
            style: {
              fontSize:  '15px',
              fontWeight:  'bold',
              fontFamily:  "'Roboto', sans-serif",
              color: '#717272'
            },
           

          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " min"
            }
          }
        }
      },
    
      
    
    };
  }

  render() {

    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="bar" width="300" />
      </div>
    );
  }
}

export default Bar2;
