import './Footer.css';

import Linkedin from '../images/linkedin-in.svg'
import Facebook from '../images/facebook-f.svg'
import Instagram from '../images/instagram.svg'



function Footer() {
  return (
    <div className='footerPage'>
      <div className="footerLink">
        <p>Quem somos</p>
        <p>Especialidades</p>
        <p>Blog</p>
        <p>Contato</p>
        <div className='pages'>
          <img src={Linkedin} alt="linkedin" className='links'/>
          <img src={Facebook} alt="facebook" className='links'/>
          <img src={Instagram} alt="instagram" className='links'/>
        </div>
      </div>
      <div className='divisionLine'>______________________________________________________________________________________________________</div>
      <div className='direitos'>
        <p>Health Clinic São Paulo -Todos os Direitos Reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
