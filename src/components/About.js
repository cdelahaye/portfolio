import React from 'react'

import { GlobalStyle, Blank } from './Elements'
import './aboutResume.css'
import { resumeData, skills } from '../data/aboutResumeData'



const Tag = (prop) => {

    const trainingColor = '#228833'
    const educationColor = '#EE8866'
    const workColor = '#DDAA33'
    const suomiColor = '#77AADD'

    let color = 'black'
    if (prop.name === 'Work'){
        color = workColor
    } else if (prop.name === 'Training'){
        color = trainingColor
    } else if (prop.name === 'Suomi'){
        color = suomiColor
    } else if (prop.name === 'Education'){
        color = educationColor
    }
    return (
        <div className='tag' 
            key={prop.name} 
            style={{backgroundColor:color}}> 
            {prop.name} 
        </div>
    )
}

const Content = (prop) => {

    return (
        <div className='content' 
            key={prop.content} 
        > 
            {prop.content} 
        </div>
    )
}

const ResumeItem = (prop) => {

    console.log(prop.link)

    const tags = prop.tag.map(t => 
        <Tag key={t} name={t}> {t} </Tag>
    )
    const title = <div className='title'> {prop.title} </div>   
    const date = <div className='date'> {prop.date} </div>
    const contents = prop.content.map(t => 
        <Content key={t} content={t}> {t} </Content>
    )

    let link = '' 
    console.log("----")
    if (prop.link) {
        link = <a
            href={prop.link.url}
            target="_blank"
            rel="noopener noreferrer"
        > {prop.link.text}</a>
    }

    return (
        <div className='resume-item'>
            
            {tags}
            {title}  
            {date}  
            {contents}
            {link}

        </div>
    )
}



const Resume = () => {

    const skillsFrontend = skills.frontend.map(s => <div className='skill' key={s}>{s}</div>)
    const skillsBackend = skills.backend.map(s => <div className='skill' key={s}>{s}</div>)
    const skillsMisc = skills.other.map(s => <div className='skill' key={s}>{s}</div>)
    const skillsLanguages = skills.languages.map(s => <div className='skill' key={s}>{s}</div>)

    
    return (
        <div className='resume-skills-container'>

            <div className='skills-container'>


                <div className='skill-title'>
                  Frontend   
                </div>             {skillsFrontend}

                <div className='skill-title'>
                  Backend   
                </div>             
                {skillsBackend}

                <div className='skill-title'>
                  Languages   
                </div>             
                {skillsLanguages}

                <div className='skill-title'>
                  Other skills   
                </div>             
                {skillsMisc}

            </div>



            


            <div className='resume-container'>
                {resumeData.map(item => 
                    <ResumeItem 
                        key={item.id}
                        title={item.title}  
                        tag={item.tags}
                        date={item.date}
                        content={item.content}
                        link={item.link}
                    />)}
            </div>
        
        </div>

    )
}


const About = () => {


    return(
        <div>
            <GlobalStyle /> 
            <Blank> </Blank>
            <Resume/>
        </div>
    );

}

export default About







