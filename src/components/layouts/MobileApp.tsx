import Image from 'next/image'
import { Section } from '../ui/Section'

export const MobileApp = () => {
	return (
		<Section>
			<div className='w-full h-[404px] bg-[#EBFCFF] rounded-[32px] my-[80px]'>
				<p className='text-[50px] leading-[72px] font-semibold text-center pt-[60px]'>
					Download Our Mobile App
				</p>
				<p className='text-[16px] text-[#A3A4A7] font-medium text-center mt-[16px]'>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. <br /> Velit officia consequat duis enim velit mollit.
				</p>
				<div className='flex justify-center gap-[20px] mt-[48px]'>
					<div className='relative w-[175px] h-[52px]'>
						<Image src={'/Google Play.svg'} fill alt='Google' />
					</div>
					<div className='relative w-[175px] h-[52px]'>
						<Image src={'/App Store.svg'} fill alt='App Store' />
					</div>
				</div>
			</div>
		</Section>
	)
}
