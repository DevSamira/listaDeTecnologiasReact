import  trash from "../../assets/img/trash.png"

import "./CardStyle.css"

interface ConteudoCardProps {
    technology: {
        id: number;
        text: string;
        isCompleted: boolean;
    },
    deletarTecnologia: (id: number) => void;
    concluirTecnologia: () => void;
}

const Card: React.FC<ConteudoCardProps> = ({ technology, deletarTecnologia, concluirTecnologia }) => {
  return (
    <div className="tecnologias">
        <ul>
          <li>
            <div className="card-tecnologia">
              <div className="content">
                <input type="radio" name="" id="" onClick={concluirTecnologia}/>
                <p>{technology.text}</p>
                <img onClick={() => deletarTecnologia(technology.id)} src={trash} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default Card