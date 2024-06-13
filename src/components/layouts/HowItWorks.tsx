import { Section } from '@/components/ui/Section'
import Image from 'next/image'

export const HowItWorks = () => {
	return (
		<div className='mt-[80px]'>
			<Section>
				<p className='font-semibold text-[50px] leading-[72px] text-center mb-[64px]'>
					How it Works
				</p>
				<div className='flex gap-[78px] mb-[100px]'>
					{roadmapLink.map((link, i) => (
						<div key={i} className={`w-[329px] rounded-[24px] ${link.bg}`}>
							<div className='px-[28px] pt-[59px] pb-[43px]'>
								<div className='flex justify-center items-center size-[64px]'>
									<div className='relative size-[53px]'>
										<Image src={link.icon} fill alt={link.title} />
									</div>
								</div>
								<p className='text-[28px] text-[#12141D] font-semibold leading-[42px] mt-[28px]'>
									{link.title}
								</p>
								<p className='text-[16px] text-[#797979] w-[261px]'>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint.
								</p>
							</div>
						</div>
					))}
				</div>
			</Section>
		</div>
	)
}

const roadmapLink = [
	{
		icon: '/register.svg',
		title: 'Register',
		bg: 'bg-[#FEEDEC]',
	},
	{
		icon: '/addNewCard.svg',
		title: 'Add New Card',
		bg: 'bg-[#F5EBF2]',
	},
	{
		icon: '/success.svg',
		title: 'Success',
		bg: 'bg-[#EBFCFF]',
	},
]
