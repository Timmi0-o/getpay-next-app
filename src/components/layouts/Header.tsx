import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/Button'
import { NawBar } from '../ui/NawBar'
import { Section } from '../ui/Section'

export const Header = () => {
	return (
		<Section>
			<div className='absolute top-0 right-0 w-[595px] h-[877px]'>
				<Image src={'/banner.svg'} fill alt='banner' />
			</div>
			<div className='absolute top-[88px] right-[210px] w-[630px] h-[790px]'>
				<Image src={'/man-banner.png'} fill alt='man' />
			</div>
			<div className='absolute top-[460px] right-[127px] w-[374px] h-[230px]'>
				<Image src={'/card-banner.svg'} fill alt='card' />
			</div>
			<div className='flex justify-between items-center h-[42px] pt-[41px]'>
				<div className='flex'>
					<Link href={'/'}>
						<div className='relative w-[80px] h-[36px] mr-[85px]'>
							<Image src={'/logo.svg'} fill alt='logo' />
						</div>
					</Link>
					<NawBar nawLinks={nawLinks} />
				</div>
				<div className='flex justify-center items-center w-[100px] h-[42px] bg-white z-10 rounded-[12px] font-bold text-[12px] leading-[16px] duration-200 hover:opacity-90 active:opacity-80 select-none'>
					<p>Sign up</p>
				</div>
			</div>
			<div className='mt-[167px]'>
				<p className='text-[60px] font-semibold leading-[72px] tracking-[-4px]'>
					The easiest way to <br /> manage personal <br /> finances
				</p>
				<p className='w-[394px] text-[16px] text-[#A3A4A7] leading-[28px] font-normal mt-[24px]'>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit.
				</p>
				<div className='flex gap-[49px] items-center mt-[37px]'>
					<div className='w-[187px]'>
						<Button title='Get Your Card' />
					</div>
					<p className='text-[18px] font-medium leading-[28px]'>How it works</p>
				</div>
				<div className='relative flex  items-center w-full h-[113px] mt-[139px] rounded-[32px] z-20 contact-shadow bg-white'>
					<div className='flex justify-between items-center mx-auto w-[771px]'>
						{socialLink.map((link, i) => (
							<div key={i} className={`relative ${link.size}`}>
								<Image src={link.link} fill alt='' />
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	)
}

const nawLinks = [
	{ title: 'Home', href: '/' },
	{ title: 'About', href: '/' },
	{ title: 'Blog', href: '/' },
	{ title: 'Pages', href: '/' },
	{ title: 'Contact', href: '/' },
]

const socialLink = [
	{ link: '/shopify.svg', size: 'w-[86px] h-[49px]' },
	{ link: '/p&g.svg', size: 'w-[61px] h-[27px]' },
	{ link: '/facebook.svg', size: 'w-[106px] h-[27px]' },
	{ link: '/amazon.svg', size: 'w-[84px] h-[25px]' },
	{ link: '/instagram.svg', size: 'w-[106px] h-[38px]' },
]
