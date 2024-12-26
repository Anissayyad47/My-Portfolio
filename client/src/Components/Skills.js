import React from 'react'
import "./Skills.css";
import git from "../Assest/git1.png";
import gitHub from "../Assest/github-logo.png";
import postman from "../Assest/Postman.png";
import vscode from "../Assest/vscode.png"

export default function Skills() {
  return (
    <div className='skill-div'>
    <div className='Skills'>
        <h1>SKILLS</h1>
        <div className='skill-box'>
        <div className='frontend-box'>
        <br></br>
        <div class="frontend">
        <h2>Frontend</h2>
            <li>
                <span className="heading">HTML</span>
                <div className="skillbar">
                    <span className="html"></span>
                </div>
            </li>
            <li>
                <span className="heading">CSS</span>
                <div className="skillbar">
                    <span className="css"></span>
                </div>
            </li>
            <li>
                <span className="heading">JavaScript</span>
                <div className="skillbar">
                    <span className="js"></span>
                </div>
            </li>
            <li>
                <span className="heading">React</span>
                <div className="skillbar">
                    <span className="react"></span>
                </div>
            </li>
    </div>
        </div>
        <br></br>
    <br></br>
    <div className='backend-box'>
        <br></br>
        <div class="backend">
        <h2>Backend</h2>
            <li>
                <span className="heading">Node js</span>
                <div className="skillbar">
                    <span className="node"></span>
                </div>
            </li>
            <li>
                <span className="heading">Express js</span>
                <div className="skillbar">
                    <span className="express"></span>
                </div>
            </li>
            <li>
                <span className="heading">MongoDB</span>
                <div className="skillbar">
                    <span className="mongo"></span>
                </div>
            </li>
            <li>
                <span className="heading">MySQL</span>
                <div className="skillbar">
                    <span className="mysql"></span>
                </div>
            </li>
            </div>
        </div>
        </div>
        <br></br>
        <div className='tool-box'>
            <h2>Tools</h2>
            <ul>
              <li>
                <div className='img'>
                  <img src={git} alt="Description of image" className='img1'/>
                  </div>
              </li>
              <li>
                <div className='img'><img src={gitHub} alt="Description of image" className='img1' />
                </div>
              </li>
              <li>
                <div className='img'><img src={vscode} alt="Description of image" className='img1'/>
                </div>
              </li>
              <li>
                <div className='img'><img src={postman} alt="Description of image" className='img1'/>
                </div>
              </li>
              </ul>
        </div>
    </div>
    </div>
  )
}
