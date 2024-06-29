'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import { SIDEBAR_LINKS } from '@/constants/sidebarLinks'
import isSidebarLinkActive from '@/helpers/isSidebarLinkActive'

const BottomBar: FC = () => {
  const pathname = usePathname()
  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        {SIDEBAR_LINKS.map(({ imgURL, route, label }) => {
          const isLinkActive = isSidebarLinkActive(pathname, route)

          return (
            <Link
              key={label}
              href={route}
              className={cn('bottombar_link', { 'bg-primary-500': isLinkActive })}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                {label.split(/\s+/)[0]}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default BottomBar
