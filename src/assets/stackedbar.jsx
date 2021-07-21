import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Stackedbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
          
      series: [{
        name: 'Desistências',
        data: [5, 11, 8, 15, 22, 30, 25]
      }, {
        name: '% de Consultas',
        data: [11, 17, 15, 15, 21, 14, 14]
      }],
      options: {
        colors: ['#EF2D56', '#00359E'], 

       
        dataLabels: {
         
        
       
        
          style: {
              fontSize: '12px',
              fontFamily:"'Roboto', sans-serif",
              fontWeight: 'normal'
           
          },
         
         
        },




        chart: {
          type: 'bar',
    
     

          stacked: true,
          stackType: '100%',


          toolbar: {
            show: false,
          }



        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          categories: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex',
            'Sáb'
          ],
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'right',
          offsetX: -20,
          offsetY: 186,

          
            fontSize: '16px',
            fontFamily:"'Roboto', sans-serif",
            fontWeight: 'normal'
         
    




        },



       
          

        
      },
    
    
    };
  }


  render() {

    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="bar"  width="650" />
      </div>
    );
  }
}

export default Stackedbar;
