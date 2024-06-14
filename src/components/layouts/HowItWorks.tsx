import { Section } from '@/components/ui/Section'
import Image from 'next/image'

export const HowItWorks = () => {
	return (
		<div className='mt-[80px]'>
			<Section>
				<p className='font-semibold text-[36px] lg:text-[50px] leading-[72px] text-center mb-[64px]'>
					How it Works
				</p>
				<div className='flex flex-col items-center md:flex-row justify-center gap-[20px] md:gap-[78px] mb-[100px]'>
					{roadmapLink.map((link, i) => (
						<div
							key={i}
							className={`w-[200px] lg:w-[260px] xl:w-[329px] rounded-[24px] ${link.bg}`}
						>
							<div className='px-[16px] lg:px-[28px] pt-[24px] pb-[24px] lg:pb-[43px]'>
								<div className='flex justify-center items-center size-[64px]'>
									<div className='relative size-[40px] lg:size-[53px]'>
										<Image src={link.icon} fill alt={link.title} />
									</div>
								</div>
								<p className='md:text-[20px] lg:text-[28px] text-[#12141D] font-semibold leading-[42px] lg:mt-[28px]'>
									{link.title}
								</p>
								<p className='text-[14px] lg:text-[16px] text-[#797979] lg:w-[220px] xl:w-[261px]'>
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
