import Container from 'container/Container'
import { CalendarEvent, Title } from '../../components'
import { Box } from '@mui/material'
import Content from 'content/Content'

const Calendar = () => {
    return (
        <Container>
            <Title title="Calendar"/>
            <Content
                addClassName="w-[600px]"
            >
                <CalendarEvent/>
            </Content>
        </Container>
    )
}

export default Calendar