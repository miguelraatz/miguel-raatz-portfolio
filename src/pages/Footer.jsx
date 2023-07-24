import { AiOutlineHome } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Miguel Raatz | Todos os Direitos Reservados.</p>
      </div>

      <div className="footer-iconTop">
        <a className="footer-icon" href="#home"><AiOutlineHome /></a>
        <a className="footer-icon" href="https://www.linkedin.com/in/miguelraatz/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a className="footer-icon" href="https://github.com/miguelraatz" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a className="footer-icon" href="https://www.instagram.com/miguelraatz/" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
    </footer>
  )
}