import { IChartData } from "typescript/interfaces/IChartData";

export const barChartDataDay: IChartData = {
	labels: ["09:00AM", "10:00AM", "11:00AM", "12:00PM", "01:00PM", "02:00PM", "03:00PM", "04:00PM", "05:00PM"],
	datasets: [
		{
			label: "First Day of the Month",
			data: [10.25, 11.50, 13.25, 13.75, 13.50, 13.00, 11.75, 11.50, 11.00],
			tension: 0.5,
			borderColor: "#b3b3ff",
			backgroundColor: "#b3b3ff75",
		},
		{
			label: "Last Day of the Month",
			data: [10.00, 12.25, 11.75, 12.50, 12.25, 11.50, 11.25, 10.75, 10.50],
			tension: 0.5,
			borderColor: "#3333ff",
			backgroundColor: "#3333ff75",
		},
	],
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Profit",
			},
		},
		scales: {
			y: {
			  	min: 9.00,
			  	max: 15.00,
			}
		}
	},
};