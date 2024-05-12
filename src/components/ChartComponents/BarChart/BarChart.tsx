import { useState, ChangeEvent } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartSelect from "components/Selects/ChartSelect/ChartSelect";
import { barChartDataYear, barChartDataMonth, barChartDataWeek, barChartDataDay } from "./barChartData";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BarChart = (): JSX.Element => {
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
            { isSelected === "1 year" && <Bar options={barChartDataYear.options} data={barChartDataYear} /> }
            { isSelected === "1 month" && <Bar options={barChartDataMonth.options} data={barChartDataMonth} /> }
            { isSelected === "1 week" && <Bar options={barChartDataWeek.options} data={barChartDataWeek} /> }
            { isSelected === "1 day" && <Bar options={barChartDataDay.options} data={barChartDataDay} /> }
        </>
    )
};

export default BarChart;
