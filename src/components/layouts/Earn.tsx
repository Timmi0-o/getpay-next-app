import Image from 'next/image'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export const Earn = () => {
	return (
		<Section bg='bg-[#FAFCFE]'>
			<div className='flex justify-between items-center pt-[50px]'>
				<div className='flex flex-col gap-[32px]'>
					<h1 className=' text-[36px] lg:text-[50px] lg:leading-[72px] font-semibold'>
						Earn the money and <br /> get bonuses
					</h1>
					<p className='text-[16px] font-medium leading-[32px] text-[#A3A4A7] md:max-w-[400px] lg:max-w-[494px]'>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Amet minim
						mollit non deserunt dolor do amet sint. Velit officia consequat duis
						enim velit mollit.{' '}
					</p>
					<div className='w-[187px]'>
						<Button title='Explore Now' />
					</div>
				</div>
				<div className='relative'>
					<div className='relative w-[200px] lg:w-[392px] h-[578px]'>
						<Image src={'/banner-mini.svg'} fill alt='banner-mini' />
					</div>
					<div className='absolute top-[220px] lg:top-[290px] md:right-[120px] lg:right-[150px] w-[160px] lg:w-[374px] h-[230px]'>
						<Image src={'/card-banner.svg'} fill alt='banner-mini' />
					</div>
					<div className='absolute top-[110px] lg:top-[120px] right-[100px] w-[160px] lg:w-[374px] h-[230px]'>
						<Image src={'/card-banner2.svg'} fill alt='banner-mini' />
					</div>
				</div>
			</div>
		</Section>
	)
}
