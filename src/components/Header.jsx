import React from 'react'
import logo from '../assets/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8 flex place-content-between font-Barlow' >
        <img src={logo} alt=''></img>
        <Navbar/>
    </header>
  )
}
