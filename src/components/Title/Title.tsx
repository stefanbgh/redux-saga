import "./Title.scss";

interface IProps {
    title: string;
};  

const Title = ({ title }: IProps): JSX.Element => {
    return (
        <h1 className="title">{title}</h1>
    )
}

export default Title