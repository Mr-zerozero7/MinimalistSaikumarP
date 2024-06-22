import React from 'react'
import {FooterContainer,
FlowerAndMediaContainer,
FlowerImage,
MediaContainer,
MediaHeading,
MediaIconContainer,
IconItem,
WebLink
} from './styledComponent'

// The Media icons are dynamically linked using the "Link" from the 'react-router-dom' library

const Footer = () => {
  return (
    <FooterContainer>
      <FlowerAndMediaContainer>
        <FlowerImage src='/images/Flower.svg' alt='flower image' />
        <MediaContainer>
            <MediaHeading>Follow us on</MediaHeading>
            <MediaIconContainer>
                <WebLink to='https://www.instagram.com/'>
                    <IconItem src='/images/instagram.svg' alt='instagram' /> 
                </WebLink>
                <WebLink to='https://www.youtube.com/'>
                    <IconItem src='/images/youtube.svg' alt='youtube' /> 
                </WebLink>
                <WebLink to='https://twitter.com/?lang=en'>
                    <IconItem src='/images/twitter.svg' alt='twitter' /> 
                </WebLink>
                <WebLink to='https://www.facebook.com/'>
                    <IconItem src='/images/facebook.svg' alt='facebook' /> 
                </WebLink>
                <WebLink to='https://in.linkedin.com/'>
                    <IconItem src='/images/linkedin.svg' alt='linkedin' /> 
                </WebLink>
            </MediaIconContainer>
        </MediaContainer>
        <FlowerImage src='/images/Flower.svg' alt='flower image' />
      </FlowerAndMediaContainer>
      
    </FooterContainer>
  )
}

export default Footer
