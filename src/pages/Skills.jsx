import { } from 'react-icons/di'
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiExpress,
  SiDocker,
  SiSequelize,
  SiTypescript,
  SiPython,
} from 'react-icons/si'

export default function Skills () {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">Habili<span>dades</span></h2>
      <div className="skills-content">
        <div className="skill-container">
          <SiJavascript className="skill-icon" />
          <p>JavaScript</p>
        </div>

        <div className="skill-container">
          <SiTypescript className="skill-icon" />
          <p>TypeScript</p>
        </div>

        <div className="skill-container">
          <SiPython className="skill-icon" />
          <p>Python</p>
        </div>
        
        <div className="skill-container">
          <SiHtml5 className="skill-icon" />
          <p>HTML</p>
        </div>

        <div className="skill-container">
          <SiCss3 className="skill-icon" />
          <p>CSS</p>
        </div>

        <div className="skill-container">
          <SiReact className="skill-icon" />
          <p>ReactJS</p>
        </div>

        <div className="skill-container">
          <SiNodedotjs className="skill-icon" />
          <p>NodeJS</p>
        </div>

        <div className="skill-container">
          <SiMysql className="skill-icon" />
          <p>MySQL</p>
        </div>

        <div className="skill-container">
          <SiExpress className="skill-icon" />
          <p>ExpressJS</p>
        </div>

        <div className="skill-container">
          <SiDocker className="skill-icon" />
          <p>Docker</p>
        </div>

        <div className="skill-container">
          <SiSequelize className="skill-icon" />
          <p>SequelizeJS</p>
        </div>

      </div>
    </section>
  )
}