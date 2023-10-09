import { TextCentered, Name, GlobalStyle, Blank, Icons, BoxedText } from './Elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, //faGraduationCap, 
    faCode, // faLaptopCode, faFolderTree, faFileCode, 
    faComments } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import {Routes, Route, useNavigate} from 'react-router-dom'
import About from './About'
import Work from './Work'
import Contact from './Contact'



const Box = (prop) => {
    return (
        <div onClick={prop.onClick} > 
            <BoxedText>
                <Icons>
                    <FontAwesomeIcon icon={prop.icon} />
                </Icons>
                <div>  
                    {prop.text}
                </div>
            </BoxedText>
        </div>
    )
}

const SayHi = () => {
    return (
        <div>
            
            <TextCentered> Hello, I am </TextCentered>
            <Name>Clara Delahaye</Name>
            <TextCentered>I am a Full Stack developer</TextCentered>
        </div>
    )
}



const Home = () => {
    const navigate = useNavigate()

    const navigateToInfo = () => {
        navigate('/about')
    }

    const navigateToWork = () => {
        navigate('/work')
    }

    const navigateToContact = () => {
        navigate('/contact')
    }


    return(
        <div>

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>


            <GlobalStyle />

          

            <Blank> </Blank>


            <div style={{
                width:1000,
                height:300,
                display: "flex",
                margin: 'auto',
                alignItems: "center",
                gap:150,
                flexWrap: "wrap",
                justifyContent:"space-around"
            }}>


                

                <Box 
                    text="Learn a bit about me." 
                    icon={faInfoCircle}
                    onClick={navigateToInfo}
                />

                <SayHi/>

                <Box 
                    text="See what I have done." 
                    icon={faCode}
                    onClick={navigateToWork}
                />
                <Box 
                    text="Let's get in touch!" 
                    icon={faComments}
                    onClick={navigateToContact}
                />



            </div>
        </div>
    );

}
 
export default Home



