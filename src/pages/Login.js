// src/pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.startsWith("OV-ADM")) {
      navigate("/teacher"); // Professor
    } else if (code.startsWith("OV-ALUNO")) {
      navigate("/student"); // Aluno
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Insira seu código"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
import { auth } from './services/firebase';
import { signInAnonymously } from "firebase/auth";

const handleLogin = () => {
  signInAnonymously(auth)
    .then((userCredential) => {
      console.log("Usuário logado:", userCredential.user.uid);
    });
};
