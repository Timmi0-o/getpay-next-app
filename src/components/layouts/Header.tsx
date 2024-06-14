import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/Button'
import { NawBar } from '../ui/NawBar'
import { Section } from '../ui/Section'

export const Header = () => {
	return (
		<Section>
			<div className='hidden lg:block'>
				<div className='absolute top-0 right-[0vw] md:w-[290px] lg:w-[340px] xl:w-[450px] 2xl:w-[595px] md:h-[429px] lg:h-[500px] xl:h-[665px] 2xl:h-[877px] overflow-hidden'>
					<Image src={'/banner.svg'} fill alt='banner' />
				</div>
				<div className='absolute top-0 md:top-[88px] right-[120px] lg:right-[180px] 2xl:right-[210px] sm:w-[250px] md:w-[290px] lg:w-[340px] xl:w-[450px] 2xl:w-[630px] sm:h-[300px] md:h-[340px] lg:h-[400px] xl:h-[575px] 2xl:h-[790px] overflow-hidden'>
					<Image src={'/man-banner.png'} fill alt='man' />
				</div>
				<div className='absolute lg:top-[220px] xl:top-[320px] 2xl:top-[460px] right-[127px] lg:w-[240px] xl:w-[350px] 2xl:w-[374px] lg:h-[200px] xl:h-[200px] 2xl:h-[230px]'>
					<Image src={'/card-banner.svg'} fill alt='card' />
				</div>
			</div>
			<div className='flex justify-between items-center h-[42px] pt-[41px] md:px-0 mx-[20px]'>
				<div className='flex flex-row-reverse lg:flex-row md:gap-[240px] lg:gap-[0px]'>
					<Link href={'/'}>
						<div className='relative w-[80px] h-[36px] mr-[85px]'>
							<Image src={'/logo.svg'} fill alt='logo' />
						</div>
					</Link>
					<div>
						<div className='hidden lg:block'>
							<NawBar nawLinks={nawLinks} />
						</div>
						<div className='flex flex-col justify-between lg:hidden w-[32px] h-[24px] mr-[40px]'>
							<div className='bg-black w-full h-[2px]'></div>
							<div className='bg-black w-full h-[2px]'></div>
							<div className='bg-black w-full h-[2px]'></div>
						</div>
					</div>
				</div>
				<div className='flex justify-center items-center w-[100px] h-[42px] bg-black text-white lg:text-black lg:bg-white z-10 rounded-[12px] font-bold text-[12px] leading-[16px] duration-200 hover:opacity-90 active:opacity-80 select-none'>
					<p>Sign up</p>
				</div>
			</div>
			<div className='flex flex-col items-center lg:items-start mt-[60px] xl:mt-[80px] 2xl:mt-[167px] sm:px-[20px] md:px-0'>
				<p className='hidden lg:block md:text-[32px] lg:text-[45px] xl:text-[60px] font-semibold lg:leading-[50px] xl:leading-[72px] lg:tracking-[-4px]'>
					The easiest way to <br /> manage personal <br /> finances
				</p>
				<p className='block lg:hidden text-[32px] lg:text-[45px] xl:text-[60px] font-semibold lg:leading-[50px] xl:leading-[72px] lg:tracking-[-4px] text-center'>
					The easiest way to manage personal finances
				</p>
				<p className='w-[394px] text-[16px] text-[#A3A4A7] leading-[28px] font-normal mt-[24px]'>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit.
				</p>
				<div className='flex gap-[49px] items-center md:mb-[30px] lg:mb-[20px] mt-[37px]'>
					<div className='w-[187px]'>
						<Button title='Get Your Card' />
					</div>
					<p className='hidden lg:block text-[18px] font-medium leading-[28px]'>
						How it works
					</p>
				</div>
				<div className='hidden lg:flex relative w-full items-center h-fit md:h-[60px] lg:h-[90px] xl:h-[113px] mt-[-60px] lg:mt-[20px] xl:mt-[60px] 2xl:mt-[139px] rounded-[32px] z-20 contact-shadow bg-white '>
					<div className='flex flex-wrap justify-center items-center mx-auto px-[20px] w-[771px]'>
						{socialLink.map((link, i) => (
							<div key={i} className={`relative mx-[20px] ${link.size}`}>
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
	{ link: '/shopify.svg', size: 'w-[106px] h-[49px]' },
	{ link: '/p&g.svg', size: 'w-[86px] h-[49px]' },
	{
		link: '/facebook.svg',
		size: 'w-[120px] h-[30px]',
	},
	{ link: '/amazon.svg', size: 'w-[100px] h-[30px]' },
	{ link: '/instagram.svg', size: 'w-[66px] h-[38px]' },
]
