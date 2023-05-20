import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Typical from 'react-typical'
import ProjectCard from './components/ProjectCard'
import AboutMe from './data/AboutMeBio'

function App() {
  return (
    <>
      <nav className="navbar dark is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#about">
              <p>About Me</p>
            </a>
            <a className="navbar-item" href="#projects">
              <p>Projects</p>
            </a>
            <a className="navbar-item" href="#interests">
              <p>Interests</p>
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-inverted" href="#contact">
                <strong>Contact Me</strong>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="hero dark is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title hero-title">
              James Guppy
            </p>
            <p className="subtitle hero-subtitle">
              <Typical 
                steps={['Fullstack Software Engineer', 1000]}
              />
            </p>
            <hr/>
            <SocialIcon 
              url="https://github.com/jguppy92" bgColor="#ac6fde" className="social-icon"
            />
            <SocialIcon 
              url="https://linkedin.com/in/james-guppy/" bgColor="#ac6fde" 
              className="social-icon"
            />
          </div>
        </div>
      </section>
      <section className="section is-medium" id="about">
        <div className="columns">
          <div className="column is-two-fifths">
            <h1 className="title"><span className="purple-text">A</span>bout Me</h1>
            <h2 className="subtitle">I am a Fullstack Software Engineer with a background in marketing and linguistics.</h2>
            <AboutMe />
          </div>
          <div className="column is-three-fifths">
            <h1 className="title">Skills</h1>
            <div className="container-software">
              <ul className="software-icons">
                <li className="cell">
                  <i className="devicon-html5-plain"></i>
                  <span>HTML5</span>
                </li>
                <li className="cell">
                  <i className="devicon-css3-plain"></i>
                  <span>CSS3</span>
                </li>
                <li className="cell">
                  <i className="devicon-javascript-plain"></i>
                  <span>JavaScript</span>
                </li>
                <li className="cell">
                  <i className="devicon-python-plain"></i>
                  <span>Python</span>
                </li>
                <li className="cell">
                  <i className="devicon-ruby-plain"></i>
                  <span>Ruby</span>
                </li>
                <li className="cell">
                  <i className="devicon-graphql-plain"></i>
                  <span>GraphQL</span>
                </li>
                <li className="cell">
                  <i className="devicon-react-original"></i>
                  <span>React</span>
                </li>
                <li className="cell">
                  <i className="devicon-nodejs-plain"></i>
                  <span>Node.js</span>
                </li>
                <li className="cell">
                  <i className="devicon-express-original"></i>
                  <span>Express</span>
                </li>
                <li className="cell">
                  <i className="devicon-django-plain"></i>
                  <span>Django</span>
                </li>
                <li className="cell">
                  <i className="devicon-sass-original"></i>
                  <span>Sass</span>
                </li>
                <li className="cell">
                  <i className="devicon-bulma-plain"></i>
                  <span>Bulma</span>
                </li>
                <li className="cell">
                  <i className="devicon-bootstrap-plain"></i>
                  <span>Bootstrap</span>
                </li>
                <li className="cell">
                  <i className="devicon-webpack-plain"></i>
                  <span>Webpack</span>
                </li>
                <li className="cell">
                  <i className="devicon-mongodb-plain"></i>
                  <span>MongoDB</span>
                </li>
                <li className="cell">
                  <i className="devicon-postgresql-plain"></i>
                  <span>PostgreSQL</span>
                </li>
                <li className="cell">
                  <i className="devicon-npm-original-wordmark"></i>
                  <span>npm</span>
                </li>
                <li className="cell">
                  <i className="devicon-git-plain"></i>
                  <span>Git</span>
                </li>
                <li className="cell">
                  <i className="devicon-github-original"></i>
                  <span>GitHub</span>
                </li>
                <li className="cell">
                  <i className="devicon-gitlab-plain"></i>
                  <span>GitLab</span>
                </li>
                <li className="cell">
                  <i className="devicon-heroku-original"></i>
                  <span>Heroku</span>
                </li>
                <li className="cell">
                  <i className="devicon-apple-original"></i>
                  <span>MacOS</span>
                </li>
                <li className="cell">
                  <i className="devicon-linux-plain"></i>
                  <span>Linux</span>
                </li>
                <li className="cell">
                  <i className="devicon-vscode-plain"></i>
                  <span>VS Code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>       
      </section>
      <section className="section is-medium dark" id="projects">
        <ProjectCard />      
      </section>
      <section className="section is-medium" id="interests">
        <h1 className="title"><span className="purple-text">I</span>nterests</h1>
        <div className="columns">
          <div className="column is-third image-card language">
            <div className="card-text">
              <h2>Language Learning</h2>
              <p>I speak business level Japanese and elementary level Korean and still keep up with my studies regularly.</p>
            </div>
          </div>
          <div className="column is-third image-card music">
            <div className="card-text">
              <h2>Music</h2>
              <p>I have been playing bass guitar for over ten years and enjoy record collecting.</p>
            </div>
          </div>
          <div className="column is-third image-card bouldering">
            <div className="card-text">
              <h2>Bouldering</h2>
              <p>I developed a passion for indoor bouldering due to its challenging, problem-solving nature and go weekly.</p>
            </div>
          </div>
        </div>       
      </section>
      <section className="section is-medium dark" id="contact">
        <h1 className="title"><span className="purple-text">C</span>ontact Me</h1>
        <div className="columns">
          <div className="column is-third">
            <div className="socials">
              <SocialIcon 
                url="https://github.com/jguppy92" bgColor="#ac6fde" className="social-icon"
              />
              <p className="text">
              GitHub
              </p>
            </div>
          </div>
          <div className="column is-third">
            <div className="socials">
              <SocialIcon 
                url="https://linkedin.com/in/james-guppy/" bgColor="#ac6fde" 
                className="social-icon"
              />
              <p className="text">
              LinkedIn
              </p>
            </div>
          </div>
          <div className="column is-third">
            <div className="socials">
              <SocialIcon 
                url="mailto: j.guppy321@gmail.com?subject=Hey%20I%20found%20your%20website..." bgColor="#ac6fde" 
                className="social-icon"
              />
              <p className="text">
              j.guppy321@gmail.com
              </p>
            </div>
          </div>
        </div>       
      </section>
    </>
  )
}

export default App
