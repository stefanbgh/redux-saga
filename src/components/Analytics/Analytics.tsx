import { Box, Grid, Typography } from "@mui/material";
import { Title } from "../../components";

import Container from "container/Container";
import { analyticsData } from "./analyticsData";

import "./Analytics.scss";

const Analytics = (): JSX.Element => {
	return (
		<Container>
			<Title title="Analytics" />
			<Grid container spacing={2}>
                {
                    analyticsData.map((data) => {
                        const { id, xs, position, content, height, container } = data;

                        switch(position) {
                            case "top-full":
                                return (
                                    <Grid key={id} item xs={xs} height={height}>
					                    <Box className="analytics__box">
                                            <Typography>
                                                {content}
                                            </Typography>
                                        </Box>
				                    </Grid>
                                )
                            break;

                            case "bottom-left":
                                return (
                                    <Grid key={id} item xs={xs} height={height}>
			                    		<Box className="analytics__box">
                                            <Typography>
                                                {content}
                                            </Typography>
                                        </Box>
			                    	</Grid>
                                )
                            break;

                            case "bottom-middle":
                                return (
                                    <Grid key={id} item container spacing={2} xs={5}>
                                        {
                                            container!?.map((data) => {
                                                const { id, xs, position, content } = data;

                                                return (
                                                    <Grid key={id} item xs={xs}>
					                                	<Box className="analytics__box">
                                                            <Typography>
                                                                {content}
                                                            </Typography>
                                                        </Box>
					                                </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                )
                            break;

                            case "bottom-right":
                                return (
                                    <Grid key={id} item xs={xs} height={height}>
				                    	<Box className="analytics__box">
                                            <Typography>
                                                {content}
                                            </Typography>
                                        </Box>
				                    </Grid>
                                )
                            break;
                        }
                    })
                }
			</Grid>
		</Container>
	);
};

export default Analytics;