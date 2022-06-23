import './Team.css';
import Image from '../../images/Imagem3.png';

function Team({
  equipeRef
}) {
  return (
    <div className="teamDiv" ref={equipeRef}>
      <div className="mainteam">
        <div className="teamMenu">
        <h3>Nossa equipe</h3>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus bibendum scelerisque. Duis ornare et risus id faucibus. Fusce tincidunt leo elit. Suspendisse potenti. Nunc vestibulum dolor et risus viverra mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ex quis sapien laoreet eleifend.</p>
        <button> Saiba mais </button>
        </div>
        <img src={Image} alt="grupo de jovens" />
      </div>
    </div>
  );
}

export default Team;
