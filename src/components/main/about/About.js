import './About.css';
import Image from '../../images/Imagem2.png';

function About({
  quemSomosRef
}) {
  return (
    <div className="aboutDiv" ref={quemSomosRef}>
      <div className="mainAbout">
        <img src={Image} alt="mulher negra de blusa azul" />
        <div className="aboutMenu">
        <h3>Quem somos</h3>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus bibendum scelerisque. Duis ornare et risus id faucibus. Fusce tincidunt leo elit. Suspendisse potenti. Nunc vestibulum dolor et risus viverra mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ex quis sapien laoreet eleifend.</p>
        <button> Saiba mais </button>
        </div>
      </div>
    </div>
  );
}

export default About;
