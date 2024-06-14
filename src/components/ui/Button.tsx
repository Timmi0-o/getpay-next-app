interface ButtonProps {
	title: string
	height?: string
}

export const Button = ({ title, height }: ButtonProps) => {
	return (
		<div
			className={`flex items-center justify-center w-full bg-gradient-to-br from-cyan-500 to-cyan-600 ${
				height ? height : 'h-[54px] lg:h-[64px]'
			} rounded-[40px] text-white text-[16px] leading-[32px] font-bold duration-200 hover:opacity-90 active:opacity-80 select-none`}
		>
			{title}
		</div>
	)
}
