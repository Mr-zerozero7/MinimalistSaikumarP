import React from 'react'
import Header from '../Header'
import { useState } from 'react';
import {HomePrimryContainer,BannerContainer,
    WelcomeContainer,
WelcomeNote,
ButtonAndPopContainer,
QuickViewButton,
AboutContainer,
ContentHeadingContainer,
HalfDesignLine,
ContentHeading,
TextContainer,
BlastImage,
RushAndAboutNoteContainer,
AboutNote,
RushNote,
OurProductsMainContainer,
ProductsContainer,
ProductCard,
ProductImage,
NameAndViewContainer,
ProductName,
LargeDesignLine,
FooterSection,
YellowLine
} from './styledComponents'
import Footer from '../Footer'
import PopUp from '../PopUp';


const Home = () => {
    const [showPopup, setShowPopup] = useState(false)

  const openPopup = ()=>{
    // console.log(showPopup)  
    setShowPopup(!showPopup)
  }

  return (
    <>
    <HomePrimryContainer>
      <BannerContainer>
        <Header/>
        <WelcomeContainer>
            <WelcomeNote>The choice is yours.<br/> Because they don't hanve one.</WelcomeNote>
            <ButtonAndPopContainer>
                <QuickViewButton type='button' onClick={openPopup}>QUICK VIEW</QuickViewButton>
                {showPopup && <PopUp/>}
            </ButtonAndPopContainer>
        </WelcomeContainer>
      </BannerContainer>
        <AboutContainer>
            <ContentHeadingContainer>
                <HalfDesignLine src='/images/SmallDesignLine.svg' alt='about left line'/>
                <ContentHeading>About</ContentHeading>
                <HalfDesignLine src='/images/SmallDesignLine.svg' alt='about right line'/>
            </ContentHeadingContainer>
            <TextContainer>
                <BlastImage src='/images/Blast.svg' alt='blast image' />
                <RushAndAboutNoteContainer>
                <AboutNote>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their
                            chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can
                            be heard louder than their cries for miles. Buy them, burst them, brag about them.</AboutNote>
                <RushNote>The choice is yours. Because they don’t have one.</RushNote>
                </RushAndAboutNoteContainer>
                <BlastImage src='/images/Blast.svg' alt='blast image' />
            </TextContainer>
        </AboutContainer>
        <OurProductsMainContainer>
            <ContentHeadingContainer>
                <HalfDesignLine src='/images/SmallDesignLine.svg' alt='about left line'/>
                <ContentHeading>Our Products</ContentHeading>
                <HalfDesignLine src='/images/SmallDesignLine.svg' alt='about left line'/>
            </ContentHeadingContainer>
            <ProductsContainer>
                <ProductCard>
                    <ProductImage src='/images/BeejPatakha.svg' alt='product image' />
                    <NameAndViewContainer>
                        <ProductName>Raju Rassibomb</ProductName>
                        <PopUp/>
                    </NameAndViewContainer>
                </ProductCard>
                <ProductCard>
                    <ProductImage src='/images/BeejPatakha.svg' alt='product image' />
                    <NameAndViewContainer>
                        <ProductName>Ladiyon ki Rani Chani</ProductName>
                        <PopUp/>
                        
                    </NameAndViewContainer>
                </ProductCard>
            </ProductsContainer>
                <LargeDesignLine src='/images/LargeDesignLine01.svg' alt='large design line'/>
        </OurProductsMainContainer>
        <FooterSection>
            <YellowLine src='/images/YellowLine.svg' alt='yellow line' />
                <Footer/>
            <YellowLine src='/images/YellowLine.svg' alt='yellow line' />
        </FooterSection>
    </HomePrimryContainer>
    </>
  )
}
// {showPopup && }
//<ProductViewButton type='button' onClick={openPopup}>QUICK VIEW</ProductViewButton>

export default Home
