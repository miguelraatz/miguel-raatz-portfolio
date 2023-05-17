import { AiOutlineMenu } from 'react-icons/ai'

export default function Header () {
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onClick = () => {
    menuIcon.classList.toogle('bx-x');
    navbar.classList.toogle('active')
  };

  return (
    <header className="header">
      <div className="container-name">
          <h2 className="first-name">Miguel</h2>
          <h2 className="second-name">Raatz</h2>
          <span className="square"></span>
      </div>
      <AiOutlineMenu id="menu-icon"/>
      <nav className="navbar">
        <a href="#home" className="active">Início</a>
        <a href="#about" >Sobre</a>
        <a href="#skills">Habilidades</a>
        <a href="#portfolio">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  )
}
