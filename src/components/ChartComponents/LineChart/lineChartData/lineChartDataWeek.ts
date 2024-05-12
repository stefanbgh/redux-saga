import { IChartData } from "typescript/interfaces/IChartData";

export const lineChartDataWeek: IChartData = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	datasets: [
		{
			label: "First Week of the Month",
			data: [325, 350, 360, 330, 380, 420, 400],
			tension: 0.5,
			borderColor: "#adebeb",
			backgroundColor: "#adebeb",
		},
		{
			label: "Last Week of the Month",
			data: [350, 330, 340, 350, 375, 450, 420],
			tension: 0.5,
			borderColor: "#33cccc",
			backgroundColor: "#33cccc",
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
			  	min: 300,
			  	max: 470,
			}
		}
	},
};