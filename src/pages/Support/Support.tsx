import { Title } from '../../components'
import { Box, Typography } from '@mui/material'
import { supportData } from './supportData'
import Container from 'container/Container'
import Content from 'content/Content'

const Support = (): JSX.Element => {
    return (
        <Container>
			<Title title="Support" />
            <Content>
            	{
                    supportData.map((data) => {
                        const { id, icon, content } = data;

                        return (
                            <Box 
                                key={id}
                                className="flex items-center gap-3"
                            >
                                <Box>{icon}</Box>
                                <Typography>{content}</Typography>
                            </Box>
                        )
                    })
                }
            </Content>
		</Container>
    )
}

export default Support