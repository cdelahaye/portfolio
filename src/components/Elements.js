import { createGlobalStyle, styled } from 'styled-components'; 
import { FaBars } from 'react-icons/fa'; 
import { NavLink as Link } from 'react-router-dom'; 

/* Palette 
Background: #5b748b (lighter) ; #2e3b46 (darker)
Important: #FB9902 (orange) ; #78BBD0 (light blue)
Main text: #D5DEE4 (main) ; #e0e7eb (on focus)
Project folder: #455969 (main) ; #5C778C (on focus)
Contact form: #555F67 (main background) ; #222C34 ("send" button background)

Navigation bar: on focus = bold ; for contact, background changes to #222C34
*/


// --- Global settings ---

export const GlobalStyle = createGlobalStyle`
  body {
    background: radial-gradient(#28343e, #141a1f);
    height: 100%;   /* 100vh */
  }`
/* background: radial-gradient(#28343e, #141a1f);  */

export const Text = styled.p`
  font-family:'New Century Schoolbook', 'TeX Gyre Schola', serif;
  font-size: 20px;
  color: #D5DEE4;
  text-align: left;
  padding: 0 0 0 0; 
  margin: 0;
`

export const TextCentered = styled(Text)`
  text-align: center;
`

export const Name = styled.p`
  color: #78BBD0;
  font-size: 42px;
  text-align: center;
  font-weight: bold; 
  padding:2vh 0 0 0; 
  margin: 0;
`

// --- Icons and boxed texts ---


export const Icons = styled.button`
  background:transparent;
  border-radius: 5px;
  border: solid transparent;
  color: #D5DEE4;
  font-size: 42px;
  margin-bottom: 2vh;
  &:hover { 
    cursor: pointer;
  };
`;

export const BoxedText = styled.p`
  color: #D5DEE4;
  font-size: 15px;
  font-family: monospace;
  text-align: center;
  border: .1vw dashed #D5DEE4;
  padding: 15px;
  width: 160px;
  margin: auto;
  &:hover { 
    cursor: pointer;
    border: .1vw solid #78BBD0;
  };
`




// --- --- ---



export const Blank = styled.p`
    padding: 25vh 0 0 0;
`
// padding : top, right, bottom, left



// --- Navigation bar ---


/* Palette
E4491C : orange
0387B1 : bleu
003246 : bleu foncé
F5F5F5 : blanc
*/


// display: flex; 
export const Nav = styled.nav` 
height: 5vh; 
float: right;
justify-content: space-between; 
padding: 3vh; 
z-index: 12; 
`; 

export const NavLink = styled(Link)` 
color: #F5F5F5; 
float: right;
font-size: 20px;
align-items: center; 
text-decoration: none; 
padding: 0 25px; 
height: 100%; 
cursor: pointer; 
font-variant: small-caps;
&.active { 
	font-weight: bold;
  text-decoration: underline; 
} ;
&:hover {
  text-decoration: underline;
}
`; 


export const NavLinkContact = styled(NavLink)` 
color: #FB9902; 
border: .1vw;
border-style: solid;
border-radius: 5px;
padding: 1vh; 
margin-left: 10vw;
font-variant: small-caps;
`; 


export const Bars = styled(FaBars)` 
display: none; 
color: #808080; 
`; 

export const NavMenu = styled.div` 
display: flex; 
align-items: center; 
`; 



// --- Message ---

export const Info = styled.p`

color: #D5DEE4;
font-size: 22px;
font-family: monospace;
text-align: center;
position: relative;
left: 15vw;
margin: 5vh 0 0 0;
border: .1vw solid #cc0000;
width: 420px;
&:empty {
  border: none
}
`





