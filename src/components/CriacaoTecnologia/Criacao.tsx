import { useState } from "react";
import "./CriacaoStyle.css";
import plus from "../../assets/img/plus.png";

interface TecnologiaProps {
  addTecnologia: (conteudo: string) => void;
}

const Criacao: React.FC<TecnologiaProps> = ({ addTecnologia }) => {

  const [value, setValue] = useState("");

  const criarTecnologia = () =>{
    addTecnologia(value);
  }

  return (
    <div className="adicao-tecnologia">
        <input
          type="text"
          name=""
          id=""
          placeholder="Adicione uma nova tarefa"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={criarTecnologia}>
          Criar
          <img src={plus} alt="" />
        </button>
    </div>
  )
}

export default Criacao