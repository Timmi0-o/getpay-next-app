import Image from 'next/image'
import { Section } from '../ui/Section'

export const Footer = () => {
	return (
		<Section bg='bg-[#12141D]'>
			<div className='pt-[76px] h-[440px]'>
				<div className='relative w-[81px] h-[37px]'>
					<Image src={'/logo-black.svg'} fill alt='logo' />
				</div>
				{contacts.map((link, i) => (
					<div className='flex flex-col gap-[21px] mt-[28px]' key={i}>
						{i === 0 && (
							<div className='flex'>
								<div className='relative w-[24px] h-[24px] mr-[16px]'>
									<Image src={'/phone.svg'} fill alt='phone' />
								</div>
								<div className='flex flex-col gap-[5px]'>
									<p className='text-[16px] font-normal text-white leading-[24px]'>
										Phone
									</p>
									<p className='text-[14px] text-[#A3A4A7] font-medium leading-[21px]'>
										{link}
									</p>
								</div>
							</div>
						)}
						{i === 1 && (
							<div className='flex'>
								<div className='relative w-[24px] h-[24px] mr-[16px]'>
									<Image src={'/email.svg'} fill alt='phone' />
								</div>
								<div className='flex flex-col gap-[5px]'>
									<p className='text-[16px] font-normal text-white leading-[24px]'>
										Email
									</p>
									<p className='text-[14px] text-[#A3A4A7] font-medium leading-[21px]'>
										{link}
									</p>
								</div>
							</div>
						)}
						{i === 2 && (
							<div className='flex'>
								<div className='relative w-[24px] h-[24px] mr-[16px]'>
									<Image src={'/location.svg'} fill alt='phone' />
								</div>
								<div className='flex flex-col gap-[5px]'>
									<p className='text-[16px] font-normal text-white leading-[24px]'>
										Address
									</p>
									<p className='text-[14px] text-[#A3A4A7] font-medium leading-[21px]'>
										{link}
									</p>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</Section>
	)
}

const contacts = [
	'(219) 555-0114',
	'getpay@example.com',
	'4517 Washington Ave. Manchester, Kentucky 39495',
]
