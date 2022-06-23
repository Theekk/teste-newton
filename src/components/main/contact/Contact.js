import './Contact.css';

import Phone from '../../images/phone-alt.svg'
import WhatsApp from '../../images/whatsapp.svg'
import Wechat from '../../images/wechat.svg'

function Contact({
  contatoRef
}) {
  return (
    <div className="mainContact" ref={contatoRef}>
      <div className="contact">
        <h2>Fale Conosco</h2>
        <p>Quer conversar com a Health Clinic? Basta preencher o formulário abaixo e nós entraremos em contato assim que possível!</p>
        <div className="buttons">
        <button>
          <img src={Phone} alt="telefone" />
           Telefone
        </button>
        <button>
          <img src={WhatsApp} alt="WhatsApp" />
           WhatsApp 
        </button>
        <button>
          <img src={Wechat} alt="Wechat" />
           Wechat
        </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
