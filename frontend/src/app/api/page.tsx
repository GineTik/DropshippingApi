import Section from '@/components/Section/Section'
import ApiEndpoints from '@/pages/Account/Tabs/ApiEndpoints/ApiEndpoints'

const page = () => {
	return (
		<Section className="max-w-[800px] pt-6 pb-6 md:pt-20 md:pb-20">
			<ApiEndpoints />
		</Section>
	)
}

export default page
