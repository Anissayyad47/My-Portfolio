import React from 'react'
import "./Projects.css"
import gitHub from "../Assest/github-logo.png";

export default function Projects() {
  return (
    <div className='project-div'>
    <div className='project'>
        <h1>PROJECTS</h1>
            <ul className='project-row1'>
                <li>
                    <div className='p1'>Project1</div>
                </li>
                <li>
                    <div className='p1'>Project2</div>
                </li>
                <li>
                    <div className='p1'>Project3</div>
                </li>
            </ul>
            <div className='gitlink'>
                <a href='https://github.com/Anissayyad47'><img src={gitHub}/></a>
                Git Hub
            </div>
    </div>
    </div>
  )
}

