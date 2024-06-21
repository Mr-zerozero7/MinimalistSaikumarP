import React from 'react'

import {NavContainer,WebsiteLogo,ProfileButton,ProfileIcon} from './styledComponents'

const Header = () => {
  return (
    <NavContainer>
      <WebsiteLogo src='/images/FireFly.svg' alt='website logo'/>
      <ProfileButton type='button'><ProfileIcon/></ProfileButton>
    </NavContainer>
  )
}

export default Header
