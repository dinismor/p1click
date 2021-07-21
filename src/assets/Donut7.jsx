import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut3 extends Component {

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

       
          offsetY: 70,
        },
       
       

      },
      series: [30, 30, 40],

      
  }
}

  render() {

    return (
      <div className="donut3">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="430" />
      
</div>
  
    );

  }
}

export default Donut3;
