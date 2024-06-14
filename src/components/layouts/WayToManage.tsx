import Image from 'next/image'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export const WayToManage = () => {
	return (
		<div className='relative w-full'>
			<Section bg='bg-[#FAFCFE]'>
				<div className='flex flex-col gap-[60px] lg:gap-[130px] h-fit lg:h-[772px]'>
					<div className='pt-[100px]'>
						<div className='absolute top-0 lg:top-[6px] ml-[26px] md:w-[350px] md:h-[450px] lg:w-[500px] lg:h-[630px] z-10'>
							<Image src={'/man-way-manage.png'} fill alt='man-way-manage' />
						</div>
						<div className='relative top-[0px] lg:top-[0px] md:w-[300px] md:h-[350px] lg:w-[430px] lg:h-[536px]'>
							<Image src={'/banner-mini.svg'} fill alt='banner-mini' />
						</div>
					</div>
					<div className='flex flex-col justify-center'>
						<p className='text-[32px] lg:text-[50px] font-semibold lg:leading-[72px] mb-[32px]'>
							Simple way to manage your money
						</p>
						<p className='text-[16px] text-[#A3A4A7] font-medium leading-[32px] mb-[32px]'>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit. Amet
							minim mollit non deserunt dolor do amet sint. Velit officia
							consequat duis enim velit mollit.{' '}
						</p>
						<div className='w-[187px]'>
							<Button title='Explore Now' />
						</div>
					</div>
				</div>
			</Section>
		</div>
	)
}
