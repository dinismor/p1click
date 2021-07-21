import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Bar5_atrasos extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: 'Minutos',
        data: [80, 20, 77, 55, 42, 67, 85, 36, 48, 88, 70, 15]
        
     
      }],
      options: {
        colors: ['#EF2D56'], 

        chart: {
          type: 'bar',
          
          height: 250,
         
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
          categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
        },
        yaxis: {

          min: 0,
          max: 90,

          title: {

            text: 'Minutos',
            
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
        <Chart options={this.state.options} series={this.state.series} type="bar" width="600" />
      </div>
    );
  }
}

export default Bar5_atrasos;
