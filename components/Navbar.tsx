// Navbar
import Link from 'next/link'
import React from 'react'

import Container from '@/components/ui/container'
import MainNav from '@/components/main-nav'
import getCategories from '@/actions/get-categories'
import NavbarActions from './navbar-actions'

type Props = {}

const Navbar = async (props: Props) => {
    // get the categories to pass to main-nav
    const categories = await getCategories();

  return (
    <nav className='border-b'>
        <Container>
            <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
            <Link
            href={'/'}
            className='ml-4 flex lg:ml-0 gap-x-2'
            >
                <p className='font-bold text-xl'>Store</p>
            </Link>
            <MainNav data={categories} />
            {/* actions */}
            <NavbarActions />
            </div>
        </Container>
        </nav>
  )
}

export default Navbar