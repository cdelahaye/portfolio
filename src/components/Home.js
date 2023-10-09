import { TextCentered, Name, GlobalStyle, Blank, Icons, BoxedText } from './Elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, //faGraduationCap, 
    faCode, // faLaptopCode, faFolderTree, faFileCode, 
    faComments } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
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
                <br/>  
                {prop.text}
            </BoxedText>
        </div>
    )
}

const SayHi = (prop) => {
    return (
        <div>
            <TextCentered> Hello, I am </TextCentered>
            <Name>Clara Delahaye</Name>
            <TextCentered>I am a Full Stack developer
                <br/>
                <Icons onClick={prop.onclickLinkedin}> <FontAwesomeIcon icon={faLinkedin} /> </Icons>
                <Icons onClick={prop.onclickGithub}> <FontAwesomeIcon icon={faGithub} />  </Icons>
            </TextCentered>
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

    const navigateLinkedin = () => {
        window.open('https://fi.linkedin.com/in/clara-delahaye-640006176', '_blank');
    }

    const navigateGithub = () => {
        window.open('https://github.com/cdelahaye', '_blank')
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
                alignItems: "start",
                rowGap:120,
                columnGap:150,
                flexWrap: "wrap",
                justifyContent:"space-around"
            }}>


                

                <Box 
                    text="Learn a bit about me." 
                    icon={faInfoCircle}
                    onClick={navigateToInfo}
                />

                <SayHi onclickLinkedin={navigateLinkedin} onclickGithub={navigateGithub}/>

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



