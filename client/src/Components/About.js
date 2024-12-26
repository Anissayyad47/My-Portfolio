import React from 'react'
import "./About.css";


export default function About() {
  return (
    <>
    <div className='about'>
    <div className='about-box1'>
        <h2 about='about-text1'>Hey there, pleasure to meet you  </h2>
        <h1 about='about-text2'>My name is Anis Sayyad<br></br>
        I'm a full stack developer</h1>
        <h3 about='about-text3'>I'm a full stack developer. I've explored various technologies and tools. always interested in learning new things.</h3>
        <label className='about-box-button'>
            <button>Resume</button>
        </label>
    </div>
    <br></br>
    <br></br>
    <div className='about-box2'>
        <h1>About Me</h1>
        <p>My name is Anis Sayyad ,I'm a web developer passionate about creating awesome websites and
        applications. With skills in both front-end and back-end development, I'm always learning new things to
        stay ahead. Currently, I'm diving into Web 3 technology to explore its potential. Let's build something
        amazing together!</p>
        <br></br>
        <h2>About more</h2>
    </div>
    </div>
    </>
  )
}

