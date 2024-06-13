import { ReactNode } from 'react'

interface SectionProps {
	bg?: string
	children: ReactNode
}

export const Section = ({ bg, children }: SectionProps) => {
	return (
		<div className={`relative w-full ${bg ? bg : 'bg-[#ffff]'}`}>
			<div className={`w-[1140px] mx-auto`}>{children}</div>
		</div>
	)
}
