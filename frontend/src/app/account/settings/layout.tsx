'use client'
import Section from '@/components/section/Section'
import RequireAuthMiddleware from '@/middlewares/RequireAuthMiddleware'
import Link from 'next/link'
import RouteConstants from '../../../../constants/RouteConstants'

const SettingsLayout = ({children}: any) => {
	return (
        <RequireAuthMiddleware>
            <Section className="pt-7 sm:pt-14">
                <div className="flex md:gap-3 w-full max-w-[800px] mx-auto flex-col sm:flex-row">
                        <div className="flex items-start flex-col w-full sm:w-52">
                            <Link href={RouteConstants.Settings.Security}>Безпека</Link>
                            <Link href={RouteConstants.Settings.Payment}>Платіжні дані</Link>
                            <Link href={RouteConstants.Settings.Supplier}>Дані поставщика</Link>
                        </div>
                        <div className="px-3 sm:px-6 py-3">
                            {children}
                        </div>
                    </div>
            </Section>
        </RequireAuthMiddleware>
	)
}

export default SettingsLayout
