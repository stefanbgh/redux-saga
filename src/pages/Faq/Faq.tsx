import { useState } from "react";
import { Title } from "../../components";
import { Box, Typography } from "@mui/material";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { faqData } from "./faqData";

import Container from "container/Container";
import Content from "content/Content";
import FaqComponent from "./FaqComponent/FaqComponent";

const Faq = (): JSX.Element => {

	return (
		<Container>
			<Title title="FAQ" />
			<Content>
			{   
                faqData.map((data) => {
				    const { id, question, answer } = data;

				    return (
                        <FaqComponent
                            key={id}
                            question={question}
                            answer={answer}
                        />
				);
			})}
			</Content>
		</Container>
	);
};

export default Faq;