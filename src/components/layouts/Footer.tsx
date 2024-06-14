import Image from 'next/image'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export const Footer = () => {
	return (
		<Section bg='bg-[#12141D]'>
			<div className='flex pt-[76px] h-[440px]'>
				<div>
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
				<div className='flex gap-[75px] ml-[41px]'>
					<div className='text-white'>
						<h1 className='text-[16px] font-medium leading-[24px] mb-[27px] '>
							{Object.keys(companyLink)[0]}
						</h1>
						{companyLink.Company.map((link, i) => (
							<p
								className='text-[14px] text-[#A3A4A7] hover:text-[#bfc0c4] active:text-[#e4e5ea] cursor-pointer font-medium leading-[21px] mb-[21px]'
								key={i}
							>
								{link}
							</p>
						))}
					</div>
					<div className='text-white'>
						<h1 className='text-[16px] font-medium leading-[24px] mb-[27px] '>
							{Object.keys(companyLink)[1]}
						</h1>
						{companyLink.Help.map((link, i) => (
							<p
								className='text-[14px] text-[#A3A4A7] hover:text-[#bfc0c4] active:text-[#e4e5ea] cursor-pointer font-medium leading-[21px] mb-[21px]'
								key={i}
							>
								{link}
							</p>
						))}
					</div>
				</div>
				<div className='ml-[108px]'>
					<h1 className='text-[20px] text-white font-bold leading-[32px] mb-[8px]'>
						Subscribe to our newsletter
					</h1>
					<p className='text-[14px] text-[#A3A4A7] font-medium leading-[21px] mb-[16px]'>
						The latest insights, resources, expert opinions and company news.
					</p>
					<div className='w-[120px]'>
						<Button height='h-[42px]' title='Subscribe' />
					</div>
				</div>
			</div>
			<div className='flex gap-[3px] justify-center text-[14px] font-medium text-[#A3A4A7] pt-[28px] pb-[23px] border-t-[1px] border-t-[#ecebeb25]'>
				Copyright <p className='text-white'>GetPay</p> 2022 All Right Reserved
			</div>
		</Section>
	)
}

const contacts = [
	'(219) 555-0114',
	'getpay@example.com',
	'4517 Washington Ave. Manchester, Kentucky 39495',
]

const companyLink = {
	Company: ['Home', 'About', 'Blog', 'Pages', 'Contact'],
	Help: ['Customer Support', 'Tems & Conditions', 'Privacy Policy'],
}
