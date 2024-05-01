import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Typical from 'react-typical'
import ProjectCard from './components/ProjectCard'
import AboutMe from './data/AboutMeBio'
import { aboutMeText, heroText, interestsText } from './data/BodyText'

function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isEnglish, setIsEnglish] = React.useState(true)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [])

  function handleLanguage() {
    isEnglish ? setIsEnglish(false) : setIsEnglish(true)
  }

  return (
    <>
      <nav className="navbar dark is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a to="/" className="navbar-item">
              
            </a>
            <span
              className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
              onClick={handleToggle}
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className={`navbar-menu dark ${isOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <a className="navbar-item" href="#about">
                <p>{isEnglish ? 'About Me' : 'プロフィール'}</p>
              </a>
              <a className="navbar-item" href="#projects">
                <p>{isEnglish ? 'Projects' : '制作物'}</p>
              </a>
              <a className="navbar-item" href="#interests">
                <p>{isEnglish ? 'Interests' : '興味'}</p>
              </a>
            </div>
            <div className="navbar-end">
              <a className="navbar-item contact-button" href="#contact">
                <p>{isEnglish ? 'Contact Me' : '連絡先'}</p>
              </a>
              <span className="navbar-item">
                <p className="translate material-symbols-outlined" alt="Translate" title="Translate" onClick={handleLanguage}>
                  translate
                </p>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <section className="hero dark is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title hero-title">
              {isEnglish ? heroText.title.en : heroText.title.jp}
            </p>
            <p className="subtitle hero-subtitle">
              <Typical 
                steps={[
                  `${isEnglish ? heroText.subtitle.en : heroText.subtitle.jp}`,
                  1000
                ]}
              />
            </p>
            <hr/>
            <SocialIcon 
              url="https://github.com/jguppy92" bgColor="#ac6fde" className="social-icon hero-socials"
            />
            <SocialIcon 
              url="https://linkedin.com/in/james-guppy/" bgColor="#ac6fde" 
              className="social-icon hero-socials"
            />
          </div>
        </div>
      </section>
      <section className="section is-medium" id="about">
        <div className="columns">
          <div className="column is-two-fifths">
            {isEnglish ? 
              <h1 className="title"><span className="purple-text">A</span>bout Me</h1> :
              <h1 className="title"><span className="purple-text">プ</span>ロフィール</h1>
            }
            <h2 className="subtitle">
              {isEnglish ? aboutMeText.subtitle.en : aboutMeText.subtitle.jp}
            </h2>
            <AboutMe isEnglish={isEnglish} />
          </div>
          <div className="column is-three-fifths">
            {isEnglish ? 
              <h1 className="title">Skills</h1> :
              <h1 className="title">スキル</h1>
            }
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
                  <i className="devicon-nodejs-plain-wordmark"></i>
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
                  <i className="devicon-pytest-plain"></i>
                  <span>Pytest</span>
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
                  <i className="devicon-amazonwebservices-plain-wordmark"></i>
                  <span>AWS</span>
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
              </ul>
            </div>
          </div>
        </div>       
      </section>
      <section className="section is-medium dark" id="projects">
        <ProjectCard isEnglish={isEnglish} />      
      </section>
      <section className="section is-medium" id="interests">
        {isEnglish ? 
          <h1 className="title"><span className="purple-text">I</span>nterests</h1> :
          <h1 className="title"><span className="purple-text">興</span>味</h1>
        }
        <div className="columns">
          <div className="column is-third image-card language" alt="Japanese caligraphy.">
            <div className="card-text">
              <h2>
                {
                  isEnglish ?
                    interestsText.languageLearning.subtitle.en :
                    interestsText.languageLearning.subtitle.jp
                }
              </h2>
              <p>
                {isEnglish ? interestsText.languageLearning.en : interestsText.languageLearning.jp}
              </p>
            </div>
          </div>
          <div className="column is-third image-card music" alt="Fender jazz bass headstock.">
            <div className="card-text">
              <h2>
                {
                  isEnglish ?
                    interestsText.music.subtitle.en :
                    interestsText.music.subtitle.jp
                }
              </h2>
              <p>
                {isEnglish ? interestsText.music.en : interestsText.music.jp}
              </p>
            </div>
          </div>
          <div className="column is-third image-card bouldering" alt="Indoor bouldering gym.">
            <div className="card-text">
              <h2>
                {
                  isEnglish ?
                    interestsText.bouldering.subtitle.en :
                    interestsText.bouldering.subtitle.jp
                }
              </h2>
              <p>
                {isEnglish ? interestsText.bouldering.en : interestsText.bouldering.jp}
              </p>
            </div>
          </div>
        </div>       
      </section>
      <section className="section is-medium dark" id="contact">
        {isEnglish ? 
          <h1 className="title"><span className="purple-text">C</span>ontact Me</h1> :
          <h1 className="title"><span className="purple-text">連</span>絡先</h1>
        }
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
