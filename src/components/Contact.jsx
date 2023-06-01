import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

export default function Contact () {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contat<span>o</span></h2>
      <div className="contact-container">
        <div className="contact-box">
          <h2><FaWhatsapp className="contact-icon"/> WhatsApp</h2>
          <h3>(44)98860-7616</h3>
        </div>

        <div className="contact-box">
          <h2><AiOutlineMail className="contact-icon"/> Email</h2>
          <h3>miguelraatzdev@gmail.com</h3>
        </div>

        <div className="contact-box">
          <h2><CiLocationOn className="contact-icon"/> Localização</h2>
          <h3>Terra Roxa / PR</h3>
        </div>
      </div>
    </section>
  )
}