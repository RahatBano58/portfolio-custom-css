import Link from 'next/link';
import '../style/header.css'
import React from 'react'
import { Bars3Icon } from "@heroicons/react/16/solid";

const Header = () => {
  return (
    <section className="header-section">

    <div className='header'>
      {/* logo */}
      <div className="logo">Portfolio</div>
      {/* list */}
      <div className="list-items">
        <ul>
            <li> <Link href='/' className='links-item'>Home</Link></li>
            <li> <Link href='#about' className='links-item'>About</Link></li>
            <li> <Link href='#projects' className='links-item'>Projects</Link></li>
            <li> <Link href='#contact' className='links-item'>Contact</Link></li>
        </ul> 
      </div>
      {/* HambergerMenu */}
      <div className="menu">
      <Bars3Icon />
      </div>




    </div>
    </section>
  )
}

export default Header;