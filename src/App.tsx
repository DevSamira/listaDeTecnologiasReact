import { useState } from "react";
import Criacao from "./components/CriacaoTecnologia/Criacao";
import TopPage from "./components/TopPage/TopPage";
import ListaTec from "./components/listaTecnologias/ListaTec";

import "./index.css";
import Card from "./components/CardTecnologia/Card";

function App() {
  const [contador, setContador] = useState(0);
  const [tecnologias, setTecnologias] = useState([
    {
      id: 1,
      text: "React",
      isCompleted: false,
    },
  ]);
  
  const addTecnologia = (text: string) => {
    const novasTecnologias = [
      ...tecnologias,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ];
    setTecnologias(novasTecnologias);
  };

  const delTecnologia = (id: number) => {
    const novasTecnologias = [...tecnologias];
    const filteredTech = novasTecnologias.filter((tech) =>
      tech.id !== id
    );
    setTecnologias(filteredTech);
  };

  const concluirTecnologia = () => {
    //
  };

  return (
    <>
      <TopPage />
      <Criacao addTecnologia={addTecnologia} />
      <ListaTec technology={tecnologias}/>
      <div>
      {tecnologias
      .map((tech) => (
        <Card
          key={tech.id}
          technology={tech}
          deletarTecnologia={delTecnologia}
          concluirTecnologia={concluirTecnologia}
        />
      ))}
      </div>
    </>
  );
}
export default App;
