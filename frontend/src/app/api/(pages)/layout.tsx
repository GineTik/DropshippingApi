import Section from '@/components/Section/Section'
import ApiNavigation from './Navigation'

interface ApiPagesLayoutProps {
	children: any
}

const ApiPagesLayout = ({ children }: ApiPagesLayoutProps) => {
	return (
		<Section className="flex flex-col md:flex-row gap-10 pt-6 pb-6 md:pt-20 md:pb-20 justify-center items-start w-full relative">
			<ApiNavigation />
			<div className="w-full max-w-[800px] space-y-3">{children}</div>
		</Section>
	)
}

export default ApiPagesLayout
