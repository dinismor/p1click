import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Bar_aflu extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: 'Nº de Consultas',
        data: [72, 65, 80, 55, 47, 64, 68]
     
      }],
      options: {
        colors: ['#00359E'], 

        chart: {
          type: 'bar',
         
          height: 350,
        
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
          max: 90,

          title: {

            text: 'Nº de Consultas',
            
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
              return val 
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

export default Bar_aflu;
