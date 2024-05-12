import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

import "./FaqComponent.scss"

interface IProps {
    question: string;
    answer: string;
};

const FaqComponent = ({ question, answer }: IProps): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleActive = () => {
        setIsActive(!isActive);
	};

	return (
		<Box className="faq">
			<Box className="faq__question">
				<Typography>
                    {question}
                </Typography>
				{
                    isActive ? (
					    <BiUpArrow size={24} className="faq__question-arrow" onClick={handleActive} />
				    ) : (
					    <BiDownArrow size={24} className="faq__question-arrow" onClick={handleActive} />
			    	)
                }
			</Box>
			{   
                isActive ? (
				    <Box className="faq__answer">
					    <Typography>{answer}</Typography>
				    </Box>
			    ) : null
            }
		</Box>
	);
};

export default FaqComponent;