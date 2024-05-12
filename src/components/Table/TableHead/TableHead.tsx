interface IProps {
    head: string;
};

const TableHead = ({ head }: IProps): JSX.Element => {
    return (
        <th 
            scope="col" 
            className="table__head-th"
        >
            {head}
        </th>
    )
}

export default TableHead