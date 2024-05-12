interface Datasets {
	label: string;
	data: number[];
	tension?: number;
	borderColor?: string;
	backgroundColor?: string;
	borderWidth?: number;
}

export interface IChartData {
	labels: string[];
	datasets: Datasets[];
	options: {
		responsive?: boolean;
		plugins?: {
			legend?: {
				position?: "top";
			};
			title?: {
				display?: boolean;
				text?: string;
			};
		};
		scales?: {
			x?: {
			  	min?: number,
			  	max?: number,
			},

			y?: {
			  	min?: number,
			  	max?: number,
			}
		}
	};
};