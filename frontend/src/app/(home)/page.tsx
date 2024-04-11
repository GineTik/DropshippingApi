'use client'
import Present from './components/present/Present'
import ReasonsToWorkWithUs from './components/reasons-to-work-with-us/ReasonsToWorkWithUs'
import WhoIsMe from './components/who-is-me/WhoIsMe'

const HomePage = () => {
	return (
		<>
			<Present />
			<WhoIsMe />
			<ReasonsToWorkWithUs />
		</>
	)
}

export default HomePage
