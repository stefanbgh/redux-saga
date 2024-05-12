import { ChangeEventHandler } from 'react'

interface IProps {
    handleChange: ChangeEventHandler<HTMLSelectElement>;
};

const ChartsSwitchSelect = ({ handleChange }: IProps): JSX.Element => {
    return (
        <select 
            onChange={handleChange}
            defaultValue="line"
            className="select__chart"
        >
            <option value="line">line</option>
            <option value="bar">bar</option>
        </select>
    )
}

export default ChartsSwitchSelect