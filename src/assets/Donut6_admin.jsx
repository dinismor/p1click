import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut2 extends Component {

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
      series: [50, 30, 20],

      
  }
}

  render() {

    return (
      <div className="donut2">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="300" />
      

        <span className="h_semana2_admin">Semana 2</span>
       
       

</div>
  
    );

  }
}

export default Donut2;
