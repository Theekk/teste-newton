import './Header.css';
import search from '../images/search.svg';

function Header({
quemSomosRef,
equipeRef,
espacoRef,
contatoRef,
}) {

  function scrollToSection(ref){
    window.scrollTo({
      top: ref.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div className='headerPage'>
        <button onClick={() => scrollToSection(quemSomosRef.current)}>Quem somos</button>
        <button onClick={() => scrollToSection(equipeRef.current)}>Equipe</button>
        <button onClick={() => scrollToSection(espacoRef.current)}>Espaço</button>
        <button onClick={() => scrollToSection(contatoRef.current)}>Contato</button>
        <img src={search} alt="lupa" />
    </div>
  );
}

export default Header;
