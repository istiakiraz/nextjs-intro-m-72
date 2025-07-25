import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div><nav >
          <ul className='flex justify-center gap-20 bg-gray-700 py-5'>
            <Link href='/'>         
            <li>
            Home
          </li>
            </Link>

          <Link href='/services'>
          <li>
            Services
          </li>
          </Link>

         <Link href='/about'>
          <li>
            About
          </li>
         </Link>
          </ul>
        </nav></div>
  )
}
