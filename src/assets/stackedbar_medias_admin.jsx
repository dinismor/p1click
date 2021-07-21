import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Stackedbar_medias extends Component {

  constructor(props) {
    super(props);
    this.state = {
          
      series: [{
        name: 'Curativo',
        data: [200, 100, 100, 50, 100, 50, 60]
      }, {
        name: 'Vacinação',
        data: [300, 450, 150, 150, 250, 50, 120]
        
      }, {
        name: 'Consulta Geral',
        data: [500, 450, 700, 800, 650, 900, 820]
      }],
      options: {
        colors: ['#78C3FB', '#42E2B8', '#00359E'],     
 

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
          offsetX: -4,
          offsetY: 80,

          
          fontSize: '14px',
            fontFamily:"'Roboto', sans-serif",
            fontWeight: 'normal'
         
    




        },



       
          

        
      },
    
    
    };
  }


  render() {

    return (
      <div className="bar">
        <Chart options={this.state.options} series={this.state.series} type="bar"  width="450" />
      </div>
    );
  }
}

export default Stackedbar_medias;
