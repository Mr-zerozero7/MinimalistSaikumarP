import styles from 'styled-components'

export const HomePrimryContainer = styles.div`
min-height: 100vh;
`
export const BannerContainer = styles.div`
background-image: url('/images/BannerImg.jpg');
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const WelcomeContainer = styles.div`
color: #ffffff;
font-weight: 600;
font-size: 28px;
margin-left: 80px;
margin-bottom: 50px;
`
export const WelcomeNote = styles.p``
export const ButtonAndPopContainer = styles.div`
display: flex;
`
export const QuickViewButton = styles.button`
padding: 15px;
border: none;
outline: none;
cursor: pointer;
width: 150px;
color: red;
font-weight: 600;
font-size: 16px;
margin-right: 15px;
`

export const AboutContainer = styles.div`
dislay: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ContentHeadingContainer = styles.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
@media screen and (max-width: 768px){
    flex-wrap: wrap;
    margin-top: 8px;
}
`
export const HalfDesignLine = styles.img`
@media screen and (max-width: 768px){
    width: 85%;
}

`
export const ContentHeading = styles.h1`
color: #de4402;
`
export const TextContainer = styles.div`
text-align: center;
padding: 0px 20px;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`
export const BlastImage = styles.img`
width: 200px;
height: 200px;
`
export const RushAndAboutNoteContainer = styles.div`
display: flex;
flex-direction: column;
`
export const AboutNote = styles.p`
text-align: center;
max-width: 880px; 
`

export const RushNote = styles.h4`
text-align: center;
`

export const OurProductsMainContainer = styles.div`
display: flex;
flex-direction: column;
`
export const ProductsContainer= styles.div`
display: flex;
flex-dircetion: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`
export const ProductCard= styles.div`
width: 400px;
height: 480px;
border: 1px solid #000000;
border-radius: 10px;
margin: 10px;
display: flex;
flex-direction:column;
align-items: center;
`
export const ProductImage= styles.img`
width: 380px;
height: 400px;
margin: 6px;
`
export const NameAndViewContainer= styles.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 95%;
padding: 5px 20px;
`
export const ProductName= styles.p`
font-weight: 600;
font-size: 20px;
`
export const ProductViewButton=styles.button`
color: #ffffff;
background-color: #de4402;
width: 150px;
border: none;
outline: none;
cursor: pointer;
padding: 15px;
`
export const LargeDesignLine= styles.img`
width: 85%;
align-self: center;
margin: 50px;
`
export const YellowLine=styles.img`
width: 100%;
margin: 0px;
padding: 0px;
`
export const FooterSection = styles.div`
display: flex;
flex-direction: column;
`