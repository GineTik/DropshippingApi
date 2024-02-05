import ApiEndpoints from '@/components/account/tabs/api-endpoints/ApiEndpoints'
import Section from '@/components/common/section/Section'

const page = () => {
	return (
		<Section className="max-w-[800px] pt-6 pb-6 md:pt-20 md:pb-20">
			<ApiEndpoints />
		</Section>
	)
}

export default page
