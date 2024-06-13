import Image from 'next/image'
import { Section } from '../ui/Section'

export const Different = () => {
	return (
		<Section>
			<div className='h-[622px]'>
				<div className='flex absolute w-[1130px] h-[705px]'>
					<div className='relative w-full h-[705px] ml-[-170px] mt-[-85px]'>
						<Image src={'/border-line.svg'} fill alt='border-line' />
					</div>
				</div>
				<div className='relative z-10'>
					<p className='text-[50px] font-semibold leading-[72px] mt-[85px]'>
						Why our product are different
					</p>
					<div className='flex gap-[98px]'>
						{diferents.map((link, i) => (
							<div
								key={i}
								className={`w-[302px] ml-[31px] mt-[44px] ${link.mt} cursor-pointer`}
							>
								<div className='relative size-[64px]'>
									<Image src={link.img} fill alt='diffenrent-category' />
								</div>
								<p className='text-[24px] text-[#12141D] font-semibold leading-[36px] mt-[32px]'>
									{link.title}
								</p>
								<p className='text-[16px] text-[#797979] font-medium leading-[28px] mt-[8px]'>
									{link.description}
								</p>
								<div className='flex items-center mt-[32px]'>
									<p className='text-[16px] text-[#0199B3] font-medium leading-[28px] mt-[8px]'>
										Learn more
									</p>
									<div className='flex justify-center items-center size-[24px] mt-[10px]'>
										<Image
											src={'/arrow-mini.svg'}
											width={13}
											height={16}
											alt='arrow-right'
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	)
}

const diferents = [
	{
		img: '/diffenrent-category1.svg',
		title: 'Solve Problems Real Time',
		description:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
		mt: 'mt-[44px]',
	},
	{
		img: '/diffenrent-category2.svg',
		title: 'Solve Problems Real Time',
		description:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
		mt: 'mt-[108px]',
	},
	{
		img: '/diffenrent-category3.svg',
		title: 'Solve Problems Real Time',
		description:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
		mt: 'mt-[172px]',
	},
]
