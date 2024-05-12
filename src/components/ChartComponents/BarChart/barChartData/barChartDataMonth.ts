import { IChartData } from "typescript/interfaces/IChartData";

export const barChartDataMonth: IChartData = {
	labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	datasets: [
		{
			label: "Last Year",
			data: [10000, 12000, 13000, 14000, 12000, 14000, 13000, 12500, 14500, 13500, 12750, 13000],
			tension: 0.5,
            borderWidth: 2,
			borderColor: "#ffdb99",
			backgroundColor: "#ffdb9975",
		},
		{
			label: "Current Year",
			data: [12000, 11000, 13250, 13000, 11000, 14500, 14000, 13000, 15000, 14500, 14000, 13500],
			tension: 0.5,
            borderWidth: 2,
			borderColor: "#ffa500",
			backgroundColor: "#ffa50075",
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
			  	min: 8000,
			  	max: 17000,
			}
		}
	},
};