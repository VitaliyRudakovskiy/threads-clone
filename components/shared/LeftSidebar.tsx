'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { SignOutButton, SignedIn } from '@clerk/nextjs'

import { SIDEBAR_LINKS } from '@/constants/sidebarLinks'
import isSidebarLinkActive from '@/helpers/isSidebarLinkActive'

const LeftSidebar: FC = () => {
  const pathname = usePathname()

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-4 px-4'>
        {SIDEBAR_LINKS.map(({ imgURL, route, label }) => {
          const isLinkActive = isSidebarLinkActive(pathname, route)

          return (
            <Link
              key={label}
              href={route}
              className={cn('leftsidebar_link', { 'bg-primary-500': isLinkActive })}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p className='text-light-1 max-lg:hidden'>{label}</p>
            </Link>
          )
        })}
      </div>

      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton redirectUrl='/sign-in'>
            <div className='flex cursor-pointer items-center gap-2 p-2'>
              <Image src='/assets/logout.svg' alt='logout' width={24} height={24} />
              <p className='text-light-2 max-lg:hidden'>Log out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSidebar
