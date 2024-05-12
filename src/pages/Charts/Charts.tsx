import { useState, ChangeEvent } from "react";
import { Title } from "components";
import Container from "container/Container";
import Content from "content/Content";

import { LineChart, BarChart, ChartsSwitchSelect } from "../../components";

const Charts = (): JSX.Element => {
	const [isSwitched, setIsSwitched] = useState<string>("line");

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;

		setIsSwitched(value);
	};

	return (
		<Container>
			<Title title="Charts" />
			<Content
				addClassName="w-4/5"
			>
				<ChartsSwitchSelect
					handleChange={handleChange}
				/>
				{ isSwitched === "line" ? <LineChart/> : null }
				{ isSwitched === "bar" ? <BarChart/> : null }
			</Content>
		</Container>
	);
};

export default Charts;