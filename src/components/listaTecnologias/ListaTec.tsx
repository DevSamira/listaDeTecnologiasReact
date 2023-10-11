import "./ListaTecStyle.css";

interface TecnologiaCardProps {
  technology: {
    id: number;
    text: string;
    isCompleted: boolean;
  }[];
}

const ListaTec: React.FC<TecnologiaCardProps> = ({ technology }) => {
  return (
    <div>
      <div className="contagem-tecnologias">
        <p>
          Tecnologias criadas <strong>{technology.length}</strong>
        </p>
        <p>
          Concluídas <strong>0 de {technology.length}</strong>
        </p>
      </div>
    </div>
  );
};

export default ListaTec;
