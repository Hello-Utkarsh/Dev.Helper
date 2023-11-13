'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const current_path = usePathname()
    const links = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Issues', href: '/issue' }
    ]

    return (
        <div className='bg-[#457b9d]'>
            <nav className='flex justify-between p-3'>
                <Link href={"/"} className='text-2xl font-semibold'>Dev<span className='text-[#f1faee]'>.helper</span></Link>
                <div className='w-2/6 flex items-center'>
                    <ul className='flex w-full justify-around'>
                        {links.map((link) => {
                            return (
                                <Link href={link.href} key={link.label} className={`${current_path==link.href?"text-[#a8dadc]":"text-[#f1faee]"} text-[#f1faee] hover:text-[#a8dadc] font-medium`}>{link.label}</Link>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
