import { IChartData } from "typescript/interfaces/IChartData";

export const barChartDataYear: IChartData = {
	labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
	datasets: [
		{
			label: "Company 1One",
			data: [135000, 142500, 145000, 155000, 132500, 150000, 142500],
			tension: 0.5,
            borderWidth: 2,
			borderColor: "#ff9999",
			backgroundColor: "#ff999975",
		},
		{
			label: "Company 2Two",
			data: [120000, 130000, 132500, 130000, 120000, 145000, 140000],
			tension: 0.5,
            borderWidth: 2,
			borderColor: "#ff0000",
			backgroundColor: "#ff000075",
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
				max: 170000,
				min: 100000
			}
		}
	},
};