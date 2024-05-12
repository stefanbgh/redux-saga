import { useState, ChangeEvent } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartSelect } from "../../../components";
import { lineChartDataYear, lineChartDataMonth, lineChartDataWeek, lineChartDataDay } from "./lineChartData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LineChart = (): JSX.Element => {
    const [isSelected, setIsSelected] = useState<string>("1 year");

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        setIsSelected(value);
    };

	return (
        <>
            <ChartSelect
                handleChange={handleChange}
            />
            { isSelected === "1 year" && <Line options={lineChartDataYear.options} data={lineChartDataYear} /> }
            { isSelected === "1 month" && <Line options={lineChartDataMonth.options} data={lineChartDataMonth} /> }
            { isSelected === "1 week" && <Line options={lineChartDataWeek.options} data={lineChartDataWeek} /> }
            { isSelected === "1 day" && <Line options={lineChartDataDay.options} data={lineChartDataDay} /> }
        </>
    )
};

export default LineChart;