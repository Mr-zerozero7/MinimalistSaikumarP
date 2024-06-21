import styled from "styled-components";

// export const PopUpContainer= styled.div``

export const ItemContentContainer=styled.div`
display: flex;
padding: 10px;
box-shadow: 4px 4px 16px 4px;
border-radius: 20px;
@media screen and (max-width: 768px){
    flex-wrap: wrap;
    width: 300px;
}
`
export const ImagesContainer=styled.div`
max-width: 520px;
@media screen and (max-width: 768px){
    width: 280px;
}
`
export const ProductImage=styled.img`
width: 513px;
@media screen and (max-width: 768px){
    width: 280px;
    height: 160px;
}
`
export const ThumbnailContainer=styled.div``
export const ThumbnailImage=styled.img`
width: 120px;
margin: 5px;
@media screen and (max-width: 768px){
    width: 60px;
}
`
export const ItemDetailsContainer=styled.div`
max-width: 480px;
margin-left: 5px;
@media screen and (max-width: 768px){
    margin-bottom: 10px;
}
`
export const Container= styled.div`
display: flex;
justify-content: space-between;
`
export const CloseButton= styled.button`
border: none;
background-color: transparent;
font-size: 30px;
font-weight: 600;
cursor: pointer;
`
export const ItemName=styled.p`
font-weight: 600;
`
export const MrpTag=styled.p`
font-weight: 600;
`
export const Title=styled.h1`
font-size: 20px;
`
export const HrLine=styled.hr`
border-top: 1px dashed orange;
`
export const ProductDescriptionHead=styled.p`
font-weight: 600;
`
export const DescrptionNote=styled.p``
export const ProductContentHead=styled.p`
font-weight: 600;
`
export const ContentItem=styled.p``
export const ShippingHead=styled.p`
font-weight: 600;
`
export const Span = styled.span`
margin-right: 8px;
`
export const ShippingNote=styled.p``
export const ChooseNowButton=styled.button`
color: #ffffff;
font-weight: 600;
background-color: #de4402;
padding: 15px;
width: 180px;
float: right;
border: none;
outline: none;
cursor: pointer;
`

export const ProductViewButton=styled.button`
color: #ffffff;
background-color: #de4402;
width: 150px;
border: none;
outline: none;
cursor: pointer;
padding: 15px;
`