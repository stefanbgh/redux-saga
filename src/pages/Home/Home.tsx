import { Routes } from 'Routes/Routes'
import { LogoutButton, Title } from 'components'
import Container from 'container/Container'
import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {
  	return (
		<>
			<Title
				title="Welcome to the App"
			/>
			<Link 
				className="text-blue-400 hover:text-blue-600"
				to={Routes.AUTH}
			>
				Next page 
			</Link>
			<LogoutButton
				sidebar={false}
			/>
		</>
  	)
}

export default Home