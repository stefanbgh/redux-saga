import { ChangeEventHandler } from 'react'
import "./ChartSelect.scss";

interface IProps {
    handleChange: ChangeEventHandler<HTMLSelectElement>;
};

const ChartSelect = ({ handleChange }: IProps): JSX.Element => {
    return (
        <select 
            onChange={handleChange}
            defaultValue="1 year"
            className="select__chart"
            >
            <option value="1 year">1 year</option>
            <option value="1 month">1 month</option>
            <option value="1 week">1 week</option>
            <option value="1 day">1 day</option>
        </select>
    )
}

export default ChartSelect