import './Form.css';

function Form() {
  return (
    <div className="mainForm">
      <div className="formBox">
        <div className="formLeft">
          <input type="text" name="nome" placeholder="nome" id="formName" />
          <input type="email" name="email" placeholder="e-mail"id="formEmail" />
          <select name="assunto" id="assuntos">
            <option value=""></option>
            <option value="">alguma coisa</option>
          </select>
        </div>
        <div className="formRight">
          <input type="text" name="Mensagem" placeholder="Mensagem" id="formMensage" />
        </div>
      </div>
      <button>Enviar</button>
    </div>
  );
}

export default Form;
