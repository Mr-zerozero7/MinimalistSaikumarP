import React from 'react'
// Importing Thirparty icons from 'react-icons' library
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { 
    ItemContentContainer,
ImagesContainer,
ProductImage,
ThumbnailContainer,
ThumbnailImage,
ItemDetailsContainer,
ItemName,
Container,
CloseButton,
MrpTag,
Title,
HrLine,
ProductDescriptionHead,
DescrptionNote,
ProductContentHead,
ContentItem,
Span,
ShippingHead,
ShippingNote,
ChooseNowButton,
ProductViewButton
} from './styledComponents'

// importing and using Popup from 'reactjs-popup' library
import Popup from 'reactjs-popup'
import styles from 'styled-components';

const PopupView = styles(Popup)`
    .popup-overlay{
        background-color: rgba(255,255,255,0.8);
    }
    .popup-content{
        color: #000000
    }
`;

const PopUp = () => {
  return (
        <PopupView modal contentStyle={{background: '#ffffff', color: '#000000'}}
        trigger={<ProductViewButton type='button' >QUICK VIEW</ProductViewButton>} position='center'>
            {(close) => (
                    <ItemContentContainer>
                        <ImagesContainer>
                            <ProductImage src='/images/BeejPatakha.svg' alt='product image' />
                            <ThumbnailContainer>
                                <ThumbnailImage src='/images/Product01.svg' alt='thumbnail 01'/>
                                <ThumbnailImage src='/images/Frame07.svg' alt='thumbnail 01'/>
                                <ThumbnailImage src='/images/Frame07.svg' alt='thumbnail 01'/>
                                <ThumbnailImage src='/images/Frame07.svg' alt='thumbnail 01'/>
                            </ThumbnailContainer>
                        </ImagesContainer>
                        <ItemDetailsContainer>
                            <Container>
                                <ItemName>Raju Rassibomb</ItemName>
                                <CloseButton type='button' onClick={close}><RxCross2/></CloseButton>
                            </Container>
                            <MrpTag>MRP: </MrpTag>
                            <Title>Raju's Dreams/-</Title>
                            <HrLine/>
                            <ProductDescriptionHead>Product Description:</ProductDescriptionHead>
                            <DescrptionNote>This product packs an extra punch, thanks to the literal blood,
                            sweat and tears of a young boy.
                            </DescrptionNote>
                            <HrLine/>
                            <ProductContentHead>Product Contents: </ProductContentHead>
                            <ContentItem><Span><FaStar color='gold'/></Span>10 hand-hurting pieces of rassi bombs</ContentItem>
                            <ContentItem><Span><FaStar color='gold'/></Span>Jilled with great pain</ContentItem>
                            <ContentItem><Span><FaStar color='gold'/></Span>Raju’s hopes</ContentItem>
                            <HrLine/>
                            <ShippingHead>Shipping Time: </ShippingHead>
                            <ShippingNote>Before Raju understands that his dreams do not matter.</ShippingNote>
                            <ChooseNowButton type='button'>Choose Now</ChooseNowButton>
                        </ItemDetailsContainer>
                    </ItemContentContainer>
            )}
        </PopupView>
  )
}

export default PopUp
