import React from 'react'
import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
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
              <a className="button purple is-inverted">
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
              Fullstack Software Engineer
            </p>
            <hr></hr>
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
            <p className="text">
              I am a fullstack software engineer who studied at General Assembley.
            </p>
          </div>
          <div className="column is-three-fifths">
            <h1 className="title">Skills</h1>
            <p className="text">
              JavaScript
            </p>
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
      <section className="section is-large dark" id="contact">
        <h1 className="title">Contact Me</h1>
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
    </>
  )
}

export default App
