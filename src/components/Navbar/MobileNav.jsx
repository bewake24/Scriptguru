import React, { useState } from 'react'
import LeftAligned from '../snippets/LeftAligned'

function MobileNav() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };
  return (
    <div className='mobile-nav'>
      <LeftAligned /> 
      <LeftAligned />  
      <LeftAligned /> 
      <LeftAligned /> 
      <LeftAligned /> 
      <LeftAligned /> 
      <LeftAligned /> 
      <LeftAligned /> 
      <LeftAligned /> 
      <LeftAligned /> 
    </div>
  )
}

export default MobileNav