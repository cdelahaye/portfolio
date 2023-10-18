import React from 'react'
import { Text, GlobalStyle, Blank } from './Elements'
import './work.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Icons } from './Elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projectsData } from '../data/works'



const WorkItem = (prop) => {

    const tags = prop.tags.map(t => (
        <div key={t} className='tags'> 
            {t}  
        </div>
    ))

    return (
        <div className='work-item'>


            <div className='date'>
                {prop.date}
            </div>


            <div className='title'>
                {prop.title}   
            </div>

            <div className='github-link'> 
                <Icons onClick={() => {
                    window.open(prop.githubLink, '_blank')
                }}> <FontAwesomeIcon icon={faGithub}  size='xs' />  </Icons>

            </div>

            <div className='description'>
                {prop.description}  
            </div>

            {tags}

        </div>  
    )
}


const Work = () => {

    const workItems = projectsData.map(p => (
        <WorkItem key={p.id} title={p.title} githubLink={p.githubLink} description={p.description} tags={p.tags} date={p.date}/>
    )
    )

    return(
        <div>
            <GlobalStyle />
            <Blank> </Blank>

            <div className='work-container'>
                {workItems}
            </div>

            <br/> <br/> <br/> <br/>


            <Text> 
            Upcoming works: 
            I am currently working on other projects, that will soon be here.
            </Text>


        </div>
    );
 
}

export default Work







