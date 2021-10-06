import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Typical from 'react-typical'

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
              <a className="button purple is-inverted" href="#contact">
                <strong>Contact Me</strong>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="hero dark is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              James Guppy
            </p>
            <p className="subtitle">
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
            <h1 className="title">About Me</h1>
            <hr width="32%" className="subtitle-underline"/>
            <p className="text">
              I am a fullstack software engineer who studied at General Assembley.
            </p>
          </div>
          <div className="column is-three-fifths">
            <h1 className="title">Skills</h1>
            <hr width="13%" className="subtitle-underline"/>
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
                  <i className="devicon-heroku-original"></i>
                  <span>Heroku</span>
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
      <section className="section is-large dark" id="projects">
        <h1 className="title">Projects</h1>
        <div className="columns">
          <div className="column is-two-fifths">
            <p className="text">
              Image here
            </p>
          </div>
          <div className="column is-three-fifths">
            <h1 className="title">Project Title</h1>
            <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>       
      </section>
      <section className="section is-medium" id="interests">
        <div className="columns">
          <div className="column is-two-fifths">
            <h1 className="title">Interests</h1>
            <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>       
      </section>
      <section className="section is-medium dark" id="contact">
        <h1 className="title">Contact Me</h1>
        <div className="columns">
          <div className="column is-full">
            <SocialIcon 
              url="https://github.com/jguppy92" bgColor="#ac6fde" className="social-icon"
            />
            <p className="text">
              GitHub
            </p>
            <SocialIcon 
              url="https://linkedin.com/in/james-guppy/" bgColor="#ac6fde" 
              className="social-icon"
            />
            <p className="text">
              LinkedIn
            </p>
            <SocialIcon 
              url="mailto: j.guppy321@gmail.com?subject=Hey%20I%20found%20your%20website..." bgColor="#ac6fde" 
              className="social-icon"
            />
            <p className="text">
              j.guppy321@gmail.com
            </p>
          </div>
        </div>       
      </section>
    </>
  )
}

export default App
