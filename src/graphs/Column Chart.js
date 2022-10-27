import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
		render() {
		const options = {
			title: {
				text: "Death's of Children due to Lack of Food"
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: 			
					[{ label: 'India', y: 43},
					{ label: 'Bangladesh', y: 41 },
					
					{ label: 'SriLanka', y: 22 },
					{ label: 'Thailand', y: 7 },

					{ label: 'Nepal', y: 29 },
					{ label: 'Myanmar', y:23 },
					{ label: 'China', y: 3 },
					{ label: 'Afghanistan', y: 33 },
					{ label: 'Pakistan', y: 31 }, ]
				
			}
			]
		}
		
		return (
		<div style={{width:"1200px"}}> 

			<CanvasJSChart options = {options} style={{width:"400px"}}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;