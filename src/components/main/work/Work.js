import './Work.css';
import Image from '../../images/Imagem4.png';
import Caminho21 from '../../images/Caminho21.svg';

import Arrow from '../../images/arrow.png'
import Plus from '../../images/plus.png';

function Work({
  espacoRef
}) {
  return (
    <div className="workDiv" ref={espacoRef}>
      <img src={Caminho21} alt="imagem lateral" className="imgRelative" />
      <div className="mainWork">
        <div className="workMenu">
        <h3>Nosso espaço</h3>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus bibendum scelerisque. Duis ornare et risus id faucibus. Fusce tincidunt leo elit. Suspendisse potenti. Nunc vestibulum dolor et risus viverra mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ex quis sapien laoreet eleifend.</p>
        </div>
        <div className="spacer">
          <span><img src={Arrow} alt="arrow_left" />
            <span><img src={Arrow} alt="arrow_right" id="right" /></span>
          </span>
          <img src={Image} alt="grupo de jovens" id="workImg"/>
            <img src={Plus} alt="cross" id="crossImg"/>
        </div>
      </div>
    </div>
  );
}

export default Work;
