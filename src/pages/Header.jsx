import { useRef, useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'

export default function Header () {
  const dropDownRef = useRef(null)

  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);


  return (
    <header className="header">
      <div className="container-name">
          <h2 className="first-name">Miguel</h2>
          <h2 className="second-name">Raatz</h2>
          <span className="square"></span>
      </div>
      <nav className={`menu${isActive ? 'navbar' : 'inactive'}`} ref={dropDownRef}>
        <a href="#home" className="active">Início</a>
        <a href="#about" >Sobre</a>
        <a href="#skills">Habilidades</a>
        <a href="#portfolio">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
      <button className="menu-button" onClick={ onClick }>
        { isActive ? <AiOutlineCloseCircle className="icon-navbar"/> : <AiOutlineMenu className="icon-navbar" />}
      </button>
    </header>
  )
}
