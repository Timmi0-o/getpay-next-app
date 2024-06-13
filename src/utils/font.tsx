import localfont from 'next/font/local'

export const dmSans = localfont({
	src: [
		{
			weight: '700',
			path: '../../public/fonts/DMSans-Bold.ttf',
			style: 'normal',
		},
	],
})

export const poppins = localfont({
	src: [
		{
			weight: '700',
			path: '../../public/fonts/Poppins-Bold.ttf',
			style: 'normal',
		},
		{
			weight: '500',
			path: '../../public/fonts/Poppins-Medium.ttf',
			style: 'normal',
		},
		{
			weight: '400',
			path: '../../public/fonts/Poppins-Regular.ttf',
			style: 'normal',
		},
		{
			weight: '600',
			path: '../../public/fonts/Poppins-SemiBold.ttf',
			style: 'normal',
		},
	],
})
