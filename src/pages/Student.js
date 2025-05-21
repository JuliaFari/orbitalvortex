// src/pages/Student.js
import { useState } from "react";

export default function Student() {
  const [activeTab, setActiveTab] = useState("atividades");

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab("resumos")}>Resumos</button>
        <button onClick={() => setActiveTab("atividades")}>Atividades</button>
        <button onClick={() => setActiveTab("perfil")}>Perfil</button>
      </nav>

      {activeTab === "resumos" && <div>Conteúdos atualizados aqui...</div>}
      {activeTab === "atividades" && <div>Questões estilo Duolingo...</div>}
      {activeTab === "perfil" && (
        <div>
          <p>Dias consecutivos: 5</p>
          <p>Questões completas: 12</p>
        </div>
      )}
    </div>
  );
}