import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut4 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Utentes normais', 'Utentes temporários', 'Utentes prioritários'],
        colors: ['#EF2D56', '#FF6A6A', '#C20202'],

       
        dataLabels: {
         
         
          textAnchor: 'middle',
       
        
          style: {
              fontSize: '14px',
              fontFamily:"'Roboto', sans-serif",
              fontWeight: 'normal'
           
          },
         
        },

        legend: {
          show: true,

       
          offsetY: -5,
        },
       
       

      },
      series: [35, 30, 35],

      
  }
}

  render() {

    return (
      <div className="donut3">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="300" />
        <div className="hagas1_admin">
        <span className="h_semana1_admin">Semana 1</span>
       
        </div>
</div>
  
    );

  }
}

export default Donut4;
