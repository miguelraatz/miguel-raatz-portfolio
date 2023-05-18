import myPicture from '../images/foto.png'

export default function About () {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={myPicture} alt="my-picture" className="my-picture"/>
      </div>

      <div className="about-content">
        <h2 className="heading">Sobre <span>Mim</span></h2>
        <h3>Desenvolvedor Full-Stack</h3>
        <p>Olá! Meu nome é Miguel e sou um desenvolvedor web full stack com paixão por tecnologia e inovação. Com 30 anos de idade, tenho experiência em algumas linguagens e ferramentas de programação, incluindo JavaScript, TypeScript, Python, HTML, CSS, React, Jest, RTL, Docker, SQL, Node.js.
        Como estudante dedicado, estou sempre buscando aprender novas habilidades e me manter atualizado sobre as últimas tendências em tecnologia. Tenho grande interesse em criar aplicações web intuitivas e elegantes que tornam a vida das pessoas mais fácil e mais agradável.
        Se você estiver procurando por um desenvolvedor web full stack altamente motivado e dedicado, por favor, sinta-se à vontade para me contatar. Eu adoraria discutir como podemos trabalhar juntos em um projeto emocionante.</p>
      </div>
    </section>
  );
}