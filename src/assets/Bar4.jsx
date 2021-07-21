import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Bar4 extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: 'Duração',
        data: [14, 13, 8, 11, 13, 21, 25]
     
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
              fontSize:  '21px',
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
        <Chart options={this.state.options} series={this.state.series} type="bar" width="400" />
      </div>
    );
  }
}

export default Bar4;
