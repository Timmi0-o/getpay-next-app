import { Different } from '@/components/layouts/Different'
import { Earn } from '@/components/layouts/Earn'
import { HowItWorks } from '@/components/layouts/HowItWorks'
import { MobileApp } from '@/components/layouts/MobileApp'
import { WayToManage } from '@/components/layouts/WayToManage'

export default function Home() {
	return (
		<>
			<HowItWorks />
			<WayToManage />
			<Different />
			<Earn />
			<MobileApp />
		</>
	)
}
