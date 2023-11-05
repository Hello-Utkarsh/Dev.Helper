'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const current_path = usePathname()
    console.log(current_path)

    const links = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Issues', href: '/issue' }
    ]

    return (
        <div className='bg-[#329D9C]'>
            <nav className='flex justify-between p-3'>
                <Link href={"/"} className='text-2xl font-semibold'>Dev<span className='text-[#CFF4D2]'>.helper</span></Link>
                <div className='w-2/6 flex items-center'>
                    <ul className='flex w-full justify-around'>
                        {links.map((link) => {
                            return (
                                <Link href={link.href} key={link.label} className={`${current_path==link.href?"text-[#8ccdb1]":"text-[#CFF4D2]"} text-[#CFF4D2] hover:text-[#8ccdb1] font-medium`}>{link.label}</Link>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
