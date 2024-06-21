import styles from 'styled-components'
import { CgProfile } from "react-icons/cg";

export const NavContainer = styles.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
color: white;
backgroud: rgba( 255, 255, 255, 0.25 );
backdrop-filter: blur(5px);
box-shadow: 0 4px 30px rgba(0,0,0,0.1);
border: 1px solid rgba(255, 255, 255, 0.3);
`
export const WebsiteLogo = styles.img`
width: 116px;
height: 43px;
`
export const ProfileButton=styles.button`
font-size: 30px;
border: none;
background-color: transparent;
color: #ffffff;
`
export const ProfileIcon = styles(CgProfile)`
color: #ffffff;
box-shadow: 2px 3px 6px 3px orange;
border-radius: 20px;
`