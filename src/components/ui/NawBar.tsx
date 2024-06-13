'use client'
import { poppins } from '@/utils/font'
import Link from 'next/link'
import { useState } from 'react'

interface NawBarProps {
	nawLinks: { title: string; href: string }[]
}

export const NawBar = ({ nawLinks }: NawBarProps) => {
	const [isActive, setIsActive] = useState(0)
	return (
		<div className={`flex gap-[64px] font-medium ` + poppins.className}>
			{nawLinks.map((link, i) => (
				<div
					onClick={() => setIsActive(i)}
					className={` duration-200 ${
						isActive === i ? 'text-black ' : 'text-[#A3A4A7]'
					}`}
					key={i}
				>
					<Link href={link.href}>
						<p>{link.title}</p>
					</Link>
				</div>
			))}
		</div>
	)
}
