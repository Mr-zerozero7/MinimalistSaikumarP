import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
background-color: #25A769;
margin: 0px;
`

export const FlowerAndMediaContainer=styled.div`
display: flex;
justify-content: space-between;
padding: 0px 20px;
align-items: center;
`
export const FlowerImage=styled.img`
width: 60px;
height: 60px;
`

export const MediaContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 8px;
`
export const MediaHeading=styled.h2``
export const MediaIconContainer=styled.div`
width: 260px;
display: flex;
justify-content: space-evenly;
`
export const IconItem=styled.img``

export const WebLink = styled(Link)``