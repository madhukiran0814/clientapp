import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class BarChart extends Component {
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: "light5",
			title:{
				text: "Per Person Food Waste in Kg/year"
			},
			axisX: {
				title: "Country",
				reversed: true,
			},
			axisY: {
				title: "kgs/person",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [ { y: 361, label: 'Australia' },
				{ y: 278, label: 'United State' },
				{ y: 168, label: 'Turkey' },
				{ y: 165, label: 'Spain' },
				{ y: 157, label: 'Japan' },
				{ y: 154, label: 'Germany' },
				{ y: 149, label: 'Mexico' },
				{ y: 145, label: 'Italy' },
				{ y: 135, label: 'Portugals' },
				{ y: 121, label: 'Jordan' },
				{ y: 112, label: 'Tunisia' },
				{ y: 106, label: 'France' },
				{ y: 95, label: 'South Korea' },
				{ y: 75, label: 'United Kingdom' },
				{ y: 73, label: 'Egypt' },
				{ y: 71, label: 'Brazil' },
				{ y: 63, label: 'Colombia' },
				{ y: 56, label: 'Russia' },
				{ y: 51, label: 'India' },
				{ y: 44, label: 'China' },
				{ y: 44, label: 'Greece' }]
			}]
		}
		
		return (
			
		<div style={{width:"1000px"}}>
			<br></br>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default BarChart;