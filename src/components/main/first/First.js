import './First.css';
import Image from '../../images/Imagem1.png';

function First() {
  return (
    <div className="mainFirst">
      <div className='banner'>
        <img src={Image} alt="imagem_principal" /> 
      </div>
      <div className='text'>
        <h1>
          Lorem ipsum dolor sit amet
        </h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className='selection'>
        <div className='seletor s1'></div>
        <div className='seletor s2'></div>
        <div className='seletor s3'></div>
      </div>
    </div>
  );
}

export default First;
