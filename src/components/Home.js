import { Text, Name, GlobalStyle, Blank, Icons, BoxedText } from './Elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, 
          faCode, // faLaptopCode, faFolderTree, faFileCode, 
          faComments } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'




const Home = () => {

  const [hover, setHover] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [showWork, setShowWork] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const DisplayDetails = () => {
    if (showInfo) {
      return ("Learn a bit more about me.")
    } else if (showWork) {
      return ("See what I have done.")
    } else if (showContact) {
      return ("Let's get in touch!")
    }
  }

  return(
    <div>
    <GlobalStyle />
      <Blank> </Blank>
      <Text> Hello, I am </Text>
      <Name>Clara Delahaye</Name>
      <Text>I am a Full Stack developer</Text>

      <Icons>
        <FontAwesomeIcon 
          icon={faGraduationCap} 
          onClick={()=> console.log('clicked')} 
          onMouseEnter = { (e) => {
            e.preventDefault()
            setHover(true)
            setShowInfo(true)
          }}
          onMouseLeave = { (e) => {
            e.preventDefault()
            setHover(false)
            setShowInfo(false)
          }}
        />
      </Icons>

      <Icons>
        <FontAwesomeIcon 
          icon={faCode} 
          onClick={()=> console.log('clicked')} 
          onMouseEnter = { (e) => {
            e.preventDefault()
            setHover(true)
            setShowWork(true)
          }}
          onMouseLeave = { (e) => {
            e.preventDefault()
            setHover(false)
            setShowWork(false)
          }}
        />
      </Icons>  

      <Icons>
        <FontAwesomeIcon 
          icon={faComments} 
          onClick={()=> console.log('clicked')} 
          onMouseEnter = { (e) => {
            e.preventDefault()
            setHover(true)
            setShowContact(true)
          }}
          onMouseLeave = { (e) => {
            e.preventDefault()
            setHover(false)
            setShowContact(false)
          }}
        />
      </Icons>

      <BoxedText>
        <DisplayDetails/>  
      </BoxedText>

    </div>
  );

}

export default Home



